import { Component, OnInit } from "@angular/core";
import { RestSampleService } from "src/app/services/rest-sample.service";
import { WidgetResource } from "../../models/Widget.model";

@Component({
  selector: "app-rest-sample",
  templateUrl: "./rest-sample.component.html",
  styleUrls: ["./rest-sample.component.css"]
})
export class RestSampleComponent implements OnInit {

  public widgetResource: WidgetResource = null;
  public error = false;

  public get ready(): boolean {
    return this.widgetResource !== null;
  }

  constructor(
    private restSampleService: RestSampleService,
  ) { }

  public ngOnInit() {
    this.loadWidgets();
  }

  private loadWidgets(): void {
    this.widgetResource = null;
    this.error = false;
    this.restSampleService.getWidgets()
      .subscribe((res) => this.widgetResource = res,
        (error) => {
          this.error = true;
          console.log("get widgets failed");
        });
  }

}
