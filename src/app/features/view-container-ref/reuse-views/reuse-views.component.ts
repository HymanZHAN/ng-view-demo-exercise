import {
  ChangeDetectionStrategy,
  Component,
  EmbeddedViewRef,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
  ViewRef,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ArrowDownOutlineComponent,
  PlusOutlineComponent,
  RefreshOutlineComponent,
  TrashOutlineComponent,
} from "@components/icons";
import { ArchiveBoxArrowDownOutlineComponent } from "@components/icons/archive-box-arrow-down-outline.component";
import { ArrowUturnLeftOutlineComponent } from "@components/icons/arrow-uturn-left-outline.component";

@Component({
  selector: "app-reuse-views",
  standalone: true,
  imports: [
    CommonModule,
    PlusOutlineComponent,
    TrashOutlineComponent,
    ArchiveBoxArrowDownOutlineComponent,
    ArrowUturnLeftOutlineComponent,
    ArrowDownOutlineComponent,
    RefreshOutlineComponent,
  ],
  templateUrl: "./reuse-views.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ReuseViewsComponent {
  @ViewChild("container", { read: ViewContainerRef })
  private container!: ViewContainerRef;

  @ViewChild("listItemTemplate", { read: TemplateRef })
  private itemTemplate!: TemplateRef<unknown>;

  private counter = 0;
  private selectedItemView?: EmbeddedViewRef<unknown>;
  private nameToViews: Map<string, EmbeddedViewRef<unknown>> = new Map();
  public selectedItemName: string = "";
  private detachedItem: ViewRef | null = null;

  selectItem(name: string) {
    this.selectedItemName = name;
    this.selectedItemView = this.nameToViews.get(name);
  }

  addItem() {
    const name = `Item ${++this.counter}`;
    const embeddedView = this.container.createEmbeddedView(this.itemTemplate, {
      $implicit: name,
    });
    this.nameToViews.set(name, embeddedView);
  }

  removeItem() {
    if (this.selectedItemView) {
      const index = this.container.indexOf(this.selectedItemView);
      this.container.remove(index);
      this.nameToViews.delete(this.selectedItemName);
    }
  }

  detachItem() {
    if (this.selectedItemView) {
      const index = this.container.indexOf(this.selectedItemView);
      this.detachedItem =  this.container.detach(index);
    }
  }

  insertItem() {
    if (this.selectedItemView && this.detachedItem) {
      const index = this.container.indexOf(this.selectedItemView);
      this.container.insert(this.detachedItem, index);
      this.detachedItem = null;
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
