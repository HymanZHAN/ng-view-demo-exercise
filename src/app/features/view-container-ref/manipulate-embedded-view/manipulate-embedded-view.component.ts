import { ChangeDetectionStrategy, Component } from "@angular/core";
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
export default class ManipulateEmbeddedViewComponent {}
