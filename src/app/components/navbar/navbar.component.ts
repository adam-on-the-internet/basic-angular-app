import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";
import { CookieHelper } from "src/app/utilities/cookie.util";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  public get isLoggedIn(): boolean {
    return CookieHelper.isLoggedOn();
  }

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToDashboard(): void {
    this.navHelper.goToDashboard();
  }

  public goToInfo(): void {
    this.navHelper.goToInfo();
  }

  public goToLogin(): void {
    this.navHelper.goToLogin();
  }

  public goToRegister(): void {
    this.navHelper.goToRegister();
  }

  public goToWidgetOverview(): void {
    this.navHelper.goToWidgetOverview();
  }

  public goToDoodadOverview(): void {
    this.navHelper.goToDoodadOverview();
  }

  public logout(): void {
    CookieHelper.removeToken();
    this.navHelper.goToLogin();
  }
}
