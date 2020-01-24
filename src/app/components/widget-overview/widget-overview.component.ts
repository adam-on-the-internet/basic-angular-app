import { Component, OnInit } from "@angular/core";
import { WidgetService } from "src/app/services/widget.service";
import { WidgetResource } from "src/app/models/Widget.model";

@Component({
  selector: "app-widget-overview",
  templateUrl: "./widget-overview.component.html",
  styleUrls: ["./widget-overview.component.css"]
})
export class WidgetOverviewComponent implements OnInit {
  public widgetResource: WidgetResource = null;
  public error = false;

  public get ready(): boolean {
    return this.widgetResource !== null;
  }

  constructor(
    private widgetService: WidgetService,
  ) { }

  public ngOnInit() {
    this.loadWidgets();
  }

  private loadWidgets(): void {
    this.widgetResource = null;
    this.error = false;
    this.widgetService.getWidgets()
      .subscribe((res) => this.widgetResource = res,
        (error) => {
          this.error = true;
          console.log("get widgets failed");
        });
  }

}
