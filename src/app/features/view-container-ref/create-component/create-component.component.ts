import {
  ChangeDetectionStrategy,
  Component,
} from "@angular/core";
import { CommonModule } from "@angular/common";
import {
  ArrowDownOutlineComponent,
  ArrowUpOutlineComponent,
  PlusOutlineComponent,
  TrashOutlineComponent,
} from "@components/icons";

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
export default class CreateComponentComponent {}
