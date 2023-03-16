import { CommonModule } from "@angular/common";
import {
  Component,
} from "@angular/core";
import {
  PlusOutlineComponent,
  RefreshOutlineComponent,
  TrashOutlineComponent,
} from "@components/icons";

@Component({
  selector: "app-template-ref",
  standalone: true,
  imports: [CommonModule, PlusOutlineComponent, TrashOutlineComponent, RefreshOutlineComponent],
  templateUrl: "./template-ref.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
})
export default class TemplateRefComponent {}
