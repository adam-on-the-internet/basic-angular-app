import { Component } from "@angular/core";
import { BooleanHelper } from 'src/app/utilities/boolean.util';

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent {
  public email: string = null;
  public password: string = null;

  public showErrors = false;

  public get errors(): string[] {
    const myErrors = [];
    if (this.passwordInvalid) {
      myErrors.push("Please provide a password.");
    }
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

  private get passwordInvalid(): boolean {
    return !BooleanHelper.hasValue(this.password);
  }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      console.log("logging in...");
    }
  }

}
