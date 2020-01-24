import { Injectable } from "@angular/core";
import { DoodadResource } from "../models/Doodad.model";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";

@Injectable({
  providedIn: "root"
})
export class DoodadService {
  constructor(
    private http: HttpClient,
  ) { }

  public getDoodads(): Observable<DoodadResource> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "doodad",
    });
    return this.http.get(url) as Observable<DoodadResource>;
  }
}
