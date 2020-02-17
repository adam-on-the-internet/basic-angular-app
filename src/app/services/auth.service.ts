import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { RestUrlBuilder } from "../utilities/rest-url-builder.util";
import { ServiceUrl } from "../constants/rest.constants";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(
    private http: HttpClient,
  ) { }

  public login(email: string, password: string): Observable<any> {
    const url = RestUrlBuilder.buildRestUrl({
      service: ServiceUrl.BasicExpress,
      controller: "auth",
      collection: "login"
    });
    const body = {
      email,
      password
    };
    return this.http.post(url, body) as Observable<any>;
  }
}
