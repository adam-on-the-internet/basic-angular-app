import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { WidgetResource } from "../models/Widget.model";

@Injectable({
  providedIn: "root"
})
export class RestSampleService {

  constructor(
    private http: HttpClient,
  ) { }

  public getWidgets(): Observable<WidgetResource> {
    return this.http.get("https://aoti-basic-express-app.herokuapp.com/widget") as Observable<WidgetResource>;
  }
}
