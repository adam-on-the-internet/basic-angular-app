import { Component } from "@angular/core";
import { BooleanHelper } from "src/app/utilities/boolean.util";
import { AuthService } from "src/app/services/auth.service";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { UserService } from "src/app/services/user.service";

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

  constructor(
    private authService: AuthService,
    private userService: UserService,
    private navHelper: NavHelperService,
  ) { }

  public submit() {
    this.showErrors = true;
    if (this.valid) {
      this.login();
    }
  }

  public resetPassword() {
    const confirmReset = confirm(`Are you sure you want to reset the password for ${this.email}?`);
    if (confirmReset) {
      this.performReset();
    }
  }

  private performReset() {
    let response;
    this.userService.resetPasswordAutomatic(this.email)
      .subscribe((res) => response = res,
        (error) => {
          console.log("reset failed");
        }, () => {
          console.log("reset success");
        });
  }

  private login() {
    let response;
    this.authService.login(this.email, this.password)
      .subscribe((res) => response = res,
        (error) => {
          console.log("login failed");
        }, () => {
          this.navHelper.goToProfile();
        });
  }

}
