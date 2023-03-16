import { ChangeDetectionStrategy, Component } from "@angular/core";
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
export default class ReuseViewsComponent {}
