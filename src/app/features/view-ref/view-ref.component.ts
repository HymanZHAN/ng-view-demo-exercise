import { ChangeDetectionStrategy, Component } from "@angular/core";
import { RouterLink } from "@angular/router";
import { CardComponent } from "src/app/components/card/card.component";

@Component({
  selector: "app-view-ref",
  standalone: true,
  imports: [RouterLink, CardComponent],
  template: `
    <app-card>
      <ng-container title>What is a view?</ng-container>
      <ng-container body>
        <p>
          The smallest grouping of display elements that can be
          <strong>created and destroyed together</strong>.
        </p>
        <p>
          视图是可显示元素的最小分组单位，它们会被<strong>同时创建和销毁</strong>。
        </p>
        <span class="divider"></span>
        <p>A component class and its associated template define a view.</p>
        <p>组件 (component) 类及其关联的模板 (template)定义了一个视图。</p>
      </ng-container>
    </app-card>

    <app-card>
      <ng-container title>What are some characteristics?</ng-container>
      <ng-container body>
        <p>
          Properties of elements in a view can change dynamically, in response
          to user actions; the structure (number and order) of elements in a
          view <strong class="bg-red-200">cannot</strong>.
        </p>
        <p>
          视图中各个元素的属性可以动态修改以响应用户的操作，而这些元素的结构（数量或顺序）则<span
            class="bg-red-200"
            >不能</span
          >。
        </p>
        <span class="divider"></span>
        <p>
          You can change the structure of elements by inserting, moving, or
          removing nested views within their
          <a routerLink="/view-container-ref" class="link-primary"
            >view containers</a
          >.
        </p>
        <p>
          你可以通过在它们的视图容器中插入、移动或移除内嵌视图来修改这些元素的结构。
        </p>
        <span class="divider"></span>
        <p>
          View hierarchies can be loaded and unloaded dynamically as the user
          navigates through the application, typically under the control of a
          router.
        </p>
        <p>
          当用户在应用中导航时（比如使用路由器），视图树可以动态加载或卸载。
        </p>
      </ng-container>
    </app-card>
  `,
  styles: [
    `
      :host {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export default class ViewRefComponent {}
