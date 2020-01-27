import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { Widget } from "src/app/models/Widget.model";
import { WidgetService } from "src/app/services/widget.service";

@Component({
  selector: "app-widget-form",
  templateUrl: "./widget-form.component.html",
  styleUrls: ["./widget-form.component.css"]
})
export class WidgetFormComponent implements OnInit {
  public widget: Widget = null;

  public get ready(): boolean {
    return BooleanHelper.notNull(this.widget);
  }

  public get editMode(): boolean {
    return this.ready && BooleanHelper.notNull(this.widget._id);
  }

  constructor(
    private route: ActivatedRoute,
    private widgetService: WidgetService,
  ) { }

  public ngOnInit() {
    this.setupForm();
  }

  private setupForm() {
    const urlId = this.route.snapshot.paramMap.get("id");
    if (BooleanHelper.notNull(urlId)) {
      this.setupEditForm(urlId);
    } else {
      this.setupCreateForm();
    }
  }

  private setupEditForm(id: string): void {
    this.widgetService.getSingleWidget(id)
      .subscribe((res) => this.widget = res,
        (error) => {
          console.log("get widget failed");
        });
  }

  private setupCreateForm(): void {
    this.widget = {
      name: null,
      _id: null,
      type: null,
      description: null,
      age: null,
      used: false,
    };
  }

}
