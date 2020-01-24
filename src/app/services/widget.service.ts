import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WidgetResource } from "../models/Widget.model";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class WidgetService {
  constructor(
    private http: HttpClient,
  ) { }

  public getWidgets(): Observable<WidgetResource> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "widget",
    });
    return this.http.get(url) as Observable<WidgetResource>;
  }
}
