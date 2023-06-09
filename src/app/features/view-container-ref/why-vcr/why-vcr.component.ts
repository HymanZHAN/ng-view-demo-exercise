import { NgTemplateOutlet } from "@angular/common";
import {
  ChangeDetectionStrategy,
  Component,
  ViewChild,
  ViewContainerRef,
} from "@angular/core";
import { PlusOutlineComponent } from "@components/icons";
import { MinusOutlineComponent } from "@components/icons/minus-outline.component";
import { CounterComponent } from "./counter.component";

@Component({
  selector: "app-why-vcr",
  standalone: true,
  imports: [
    NgTemplateOutlet,
    CounterComponent,
    MinusOutlineComponent,
    PlusOutlineComponent,
  ],
  templateUrl: "./why-vcr.component.html",
  styles: [
    `
      :host {
        @apply flex flex-col justify-center items-center w-full;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class WhyVcrComponent {
  @ViewChild("counter1Container", { read: ViewContainerRef })
  private container!: ViewContainerRef;

  count: number = 0;

  constructor() {}

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  removeViaDOM() {
    const section = document.querySelector("section#counters");
    if (section?.firstChild) {
      section.removeChild(section.firstChild);
    }
  }

  removeViaVCR() {
    this.container.remove(0);
  }
}
