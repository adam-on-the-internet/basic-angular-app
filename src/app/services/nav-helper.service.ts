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
    this.goToRoute(ROUTES_ENUM.Dashboard);
  }

  public goToInfo(): void {
    this.goToRoute(ROUTES_ENUM.Info);
  }

  public goToFormSample(): void {
    this.goToRoute(ROUTES_ENUM.FormSample);
  }

  public goToWidgetOverview(): void {
    this.goToRoute(ROUTES_ENUM.WidgetOverview);
  }

  public goToWidgetCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.WidgetForm);
  }

  public goToWidgetEditForm(widgetId: number): void {
    this.goToRoutes([ROUTES_ENUM.WidgetForm, widgetId.toString()]);
  }

  public goToDoodadOverview(): void {
    this.goToRoute(ROUTES_ENUM.DoodadOverview);
  }

  public goToDoodadCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.DoodadForm);
  }

  public goToDoodadEditForm(doodadId: number): void {
    this.goToRoutes([ROUTES_ENUM.DoodadForm, doodadId.toString()]);
  }

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
