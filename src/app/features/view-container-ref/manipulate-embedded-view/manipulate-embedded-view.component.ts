import {
  ChangeDetectionStrategy,
  Component,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  PlusOutlineComponent,
  TrashOutlineComponent,
  ArrowUpOutlineComponent,
  ArrowDownOutlineComponent,
  RefreshOutlineComponent,
} from "@components/icons";

@Component({
  selector: "app-manipulate-embedded-view",
  standalone: true,
  imports: [
    CommonModule,
    PlusOutlineComponent,
    TrashOutlineComponent,
    ArrowUpOutlineComponent,
    ArrowDownOutlineComponent,
    RefreshOutlineComponent,
  ],
  templateUrl: "./manipulate-embedded-view.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ManipulateEmbeddedViewComponent {
  @ViewChild("container", { read: ViewContainerRef })
  private container!: ViewContainerRef;

  @ViewChild("listItemTemplate", { read: TemplateRef })
  private itemTemplate!: TemplateRef<unknown>;

  private counter = 0;
  private selectedItemView?: EmbeddedViewRef<unknown>;
  private nameToViews: Map<string, EmbeddedViewRef<unknown>> = new Map();
  public selectedItemName: string = "";

  addItem() {
    const name = `Item ${++this.counter}`;
    const itemView = this.container.createEmbeddedView(this.itemTemplate, {
      $implicit: name,
    });
    this.nameToViews.set(name, itemView);
  }

  selectItem(name: string) {
    this.selectedItemName = name;
    this.selectedItemView = this.nameToViews.get(name);
  }

  removeItem() {
    if (this.selectedItemView) {
      const index = this.container.indexOf(this.selectedItemView);
      this.container.remove(index);
      this.nameToViews.delete(this.selectedItemName);
    }
  }

  moveItemDown() {
    if (this.selectedItemView) {
      const currentIndex = this.container.indexOf(this.selectedItemView);
      this.container.move(
        this.selectedItemView,
        this.container.length > currentIndex + 1
          ? currentIndex + 1
          : currentIndex
      );
    }
  }

  moveItemUp() {
    if (this.selectedItemView) {
      const currentIndex = this.container.indexOf(this.selectedItemView);
      this.container.move(
        this.selectedItemView,
        currentIndex === 0 ? currentIndex : currentIndex - 1
      );
    }
  }

  reset() {
    this.container.clear();
    this.counter = 0;
    this.selectedItemView = undefined;
    this.nameToViews = new Map();
    this.selectedItemName = "";
  }
}
