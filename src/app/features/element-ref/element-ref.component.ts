import { Component, ElementRef, Renderer2, ViewChild } from "@angular/core";
import { HighlightDirective } from "./highlight.directive";

@Component({
  selector: "app-element-ref",
  standalone: true,
  template: `
    <h3 class="text-lg font-medium" #el>{{ text }}</h3>
    <div class="divider">AND</div>
    <h3 class="text-lg font-medium" appHighlight>{{ text }}</h3>
    <div class="divider"></div>
    <section class="space-x-4">
      <button class="btn btn-outline text-sm" (click)="highlightDirectly()">
        Direct DOM Manipulation
      </button>
      <button class="btn btn-outline btn-primary text-sm" (click)="highlightWithRenderer()">
        Renderer
      </button>
      <button class="btn btn-outline btn-warning text-sm" (click)="reset()">Reset</button>
    </section>
  `,
  imports: [HighlightDirective],
})
export default class ElementRefComponent {
  @ViewChild("el") el: ElementRef | undefined;

  text = "Highlight this line";
  highlightClass = "bg-red-200";
  highlightDirective = "appHighlight";

  constructor(private renderer: Renderer2) {}

  highlightDirectly(): void {}

  highlightWithRenderer() {}

  reset() {}
}
