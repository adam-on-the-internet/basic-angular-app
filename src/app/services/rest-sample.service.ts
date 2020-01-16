import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Todo } from "../models/Todo.model";

@Injectable({
  providedIn: "root"
})
export class RestSampleService {

  constructor(
    private http: HttpClient,
  ) { }

  public getSampleTodos(): Observable<Todo[]> {
    return this.http.get("https://jsonplaceholder.typicode.com/todos") as Observable<Todo[]>;
  }
}
