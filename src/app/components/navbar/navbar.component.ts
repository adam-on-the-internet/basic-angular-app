import { Component } from "@angular/core";
import { NavHelperService } from "src/app/services/nav-helper.service";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  constructor(
    private navHelper: NavHelperService,
  ) { }

  public goToDashboard(): void {
    this.navHelper.goToDashboard();
  }

  public goToInfo(): void {
    this.navHelper.goToInfo();
  }

  public goToRestSample(): void {
    this.navHelper.goToRestSample();
  }

  public goToFormSample(): void {
    this.navHelper.goToFormSample();
  }

  public goToWidgetOverview(): void {
    this.navHelper.goToWidgetOverview();
  }

  public goToDoodadOverview(): void {
    this.navHelper.goToDoodadOverview();
  }
}
