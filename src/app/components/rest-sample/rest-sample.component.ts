import { Component, OnInit } from "@angular/core";
import { RestSampleService } from "src/app/services/rest-sample.service";
import { Todo } from "src/app/models/Todo.model";

@Component({
  selector: "app-rest-sample",
  templateUrl: "./rest-sample.component.html",
  styleUrls: ["./rest-sample.component.css"]
})
export class RestSampleComponent implements OnInit {

  public todos: Todo[] = null;

  public get ready(): boolean {
    return this.todos !== null;
  }

  constructor(
    private restSampleService: RestSampleService,
  ) { }

  public ngOnInit() {
    this.loadSampleTodos();
  }

  private loadSampleTodos(): void {
    this.restSampleService.getSampleTodos()
      .subscribe((res) => this.todos = res,
        (error) => {
          console.log("get all shows failed");
        });
  }

}
