import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ROUTES_ENUM } from "../constants/routing.constants";

@Injectable({
  providedIn: "root"
})
export class NavHelperService {

  constructor(
    private router: Router,
  ) { }

  public goToDashboard(): void {
    this.router.navigate([ROUTES_ENUM.Dashboard]);
  }

  public goToInfo(): void {
    this.router.navigate([ROUTES_ENUM.Info]);
  }

  public goToRestSample(): void {
    this.router.navigate([ROUTES_ENUM.RestSample]);
  }
}
