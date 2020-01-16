import { Injectable } from "@angular/core";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.router.navigate(["dashboard"]);
  }

  public goToInfo(): void {
    this.router.navigate(["info"]);
  }

  public goToRestSample(): void {
    this.router.navigate(["rest-sample"]);
  }
}
