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

  public goToWidgetOverview(): void {
    this.goToRoute(ROUTES_ENUM.WidgetOverview);
  }

  public goToWidgetDetails(widgetId: string): void {
    this.goToRoutes([ROUTES_ENUM.WidgetDetails, widgetId]);
  }

  public goToWidgetCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.WidgetForm);
  }

  public goToWidgetEditForm(widgetId: string): void {
    this.goToRoutes([ROUTES_ENUM.WidgetForm, widgetId]);
  }

  public goToDoodadOverview(): void {
    this.goToRoute(ROUTES_ENUM.DoodadOverview);
  }

  public goToDoodadDetails(doodadId: string): void {
    this.goToRoutes([ROUTES_ENUM.DoodadDetails, doodadId]);
  }

  public goToDoodadCreateForm(): void {
    this.goToRoute(ROUTES_ENUM.DoodadForm);
  }

  public goToDoodadEditForm(doodadId: string): void {
    this.goToRoutes([ROUTES_ENUM.DoodadForm, doodadId]);
  }

  private goToRoute(route: string): void {
    this.goToRoutes([route]);
  }

  private goToRoutes(routes: string[]): void {
    this.router.navigate(routes);
  }
}
