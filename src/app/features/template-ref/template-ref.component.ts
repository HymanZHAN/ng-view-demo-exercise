import { CommonModule } from "@angular/common";
import {
  Component,
  TemplateRef,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import {
  PlusOutlineComponent,
  RefreshOutlineComponent,
  TrashOutlineComponent,
} from "@components/icons";

@Component({
  selector: "app-template-ref",
  standalone: true,
  imports: [
    CommonModule,
    PlusOutlineComponent,
    TrashOutlineComponent,
    RefreshOutlineComponent,
  ],
  templateUrl: "./template-ref.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
})
export default class TemplateRefComponent {
  @ViewChild("listItem", { read: TemplateRef }) listItem!: TemplateRef<unknown>;
  @ViewChild("container", { read: ViewContainerRef })
  container!: ViewContainerRef;
  items: string[] = [];
  counter = 0;

  addItem() {
    this.container.createEmbeddedView(this.listItem, {
      $implicit: `Item ${++this.counter}`,
      title: "This is title"
    });
  }
}
