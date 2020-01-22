import { Component, Input } from "@angular/core";
import { Widget } from "src/app/models/Widget.model";

@Component({
  selector: "app-widget-display",
  templateUrl: "./widget-display.component.html",
  styleUrls: ["./widget-display.component.css"]
})
export class WidgetDisplayComponent {
  @Input() public widget: Widget = null;

  public get show(): boolean {
    return this.widget !== null;
  }

}
