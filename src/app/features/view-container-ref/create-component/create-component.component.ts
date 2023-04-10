import {
  ChangeDetectionStrategy,
  Component,
  ComponentRef,
  OnDestroy,
  Renderer2,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ArrowDownOutlineComponent,
  ArrowUpOutlineComponent,
  PlusOutlineComponent,
  TrashOutlineComponent,
} from "@components/icons";
import { CardComponent } from "@components/card/card.component";
import { PicCardComponent } from "@components/card/pic-card.component";

@Component({
  selector: "app-create-component",
  standalone: true,
  imports: [
    CommonModule,
    TrashOutlineComponent,
    PlusOutlineComponent,
    ArrowDownOutlineComponent,
    ArrowUpOutlineComponent,
  ],
  templateUrl: "./create-component.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class CreateComponentComponent implements OnDestroy {
  @ViewChild("container", { read: ViewContainerRef })
  private container!: ViewContainerRef;

  private count = 0;
  private cards: ComponentRef<CardComponent | PicCardComponent>[] = [];
  private selectedCard?: ComponentRef<CardComponent | PicCardComponent>;
  private unlisteners: (() => void)[] = [];

  constructor(private renderer: Renderer2) {}

  ngOnDestroy(): void {
    this.unlisteners.forEach((f) => f());
  }

  createNewCard(index?: number) {
    const comp = this.container.createComponent(CardComponent, {
      index,
      projectableNodes: this.getNodesForCard(),
    });

    this.setupCardCmp(comp);
  }

  createNewPicCard(index?: number) {
    const comp = this.container.createComponent(PicCardComponent, {
      index,
    });

    this.setupCardCmp(comp);
  }

  private setupCardCmp(cmpRef: ComponentRef<CardComponent | PicCardComponent>) {
    cmpRef.setInput("index", ++this.count);
    this.cards.push(cmpRef);

    const unlisten = this.renderer.listen(
      cmpRef.location.nativeElement,
      "click",
      () => {
        // set other cards to unselected
        this.cards.forEach((c) => c.setInput("selected", false));
        // set this card to selected
        cmpRef.setInput("selected", true);
        // sync UI state
        cmpRef.changeDetectorRef.markForCheck();

        this.selectedCard = cmpRef;
      }
    );
    this.unlisteners.push(unlisten);
  }

  removeCard() {
    if (this.selectedCard) {
      this.cards = this.cards.filter((c) => c !== this.selectedCard);
      const selectedCardViewRef = this.selectedCard.hostView;
      this.container.remove(this.container.indexOf(selectedCardViewRef));
    }
  }

  getNodesForCard(): Node[][] {
    const titleNode: HTMLParagraphElement = this.renderer.createElement("p");
    this.renderer.setProperty(titleNode, "innerText", "New Card");
    this.renderer.setAttribute(titleNode, "title", "");

    const bodyNode: HTMLParagraphElement = this.renderer.createElement("p");
    this.renderer.setProperty(
      bodyNode,
      "innerHTML",
      "This is created by <code>createComponent</code>"
    );
    this.renderer.setAttribute(bodyNode, "body", "");

    return [[titleNode], [bodyNode]];
  }
}
