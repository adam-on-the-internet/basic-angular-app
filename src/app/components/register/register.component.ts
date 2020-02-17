import { Component } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.css"]
})
export class RegisterComponent {
  public email: string = null;
  public password: string = null;

  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.emailInvalid) {
      myErrors.push("Please provide an email.");
    }
    return myErrors;
  }

  public get valid(): boolean {
    return this.errors.length === 0;
  }

  private get emailInvalid(): boolean {
    return !BooleanHelper.hasValue(this.email);
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      console.log("logging in...");
    }
  }

}
