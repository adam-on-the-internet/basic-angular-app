import { Component, OnInit } from "@angular/core";
import { RestSampleService } from 'src/app/services/rest-sample.service';

@Component({
  selector: "app-rest-sample",
  templateUrl: "./rest-sample.component.html",
  styleUrls: ["./rest-sample.component.css"]
})
export class RestSampleComponent implements OnInit {

  constructor(
    private restSampleService: RestSampleService,
  ) { }

  public ngOnInit() {
    this.loadSampleTodos();
  }

  private loadSampleTodos(): void {
    let response;
    this.restSampleService.getSampleTodos()
      .subscribe((res) => response = res,
        (error) => {
          console.log("get all shows failed");
        }, () => {
          console.log(JSON.stringify(response));
        });
  }

}
