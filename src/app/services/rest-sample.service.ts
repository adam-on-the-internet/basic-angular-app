import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

@Injectable({
  providedIn: "root"
})
export class RestSampleService {

  constructor(
    private http: HttpClient,
  ) { }

  public getSampleTodos(): Observable<any> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos");
  }
}
