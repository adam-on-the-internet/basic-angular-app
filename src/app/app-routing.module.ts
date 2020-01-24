import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { FormSampleComponent } from "./components/form-sample/form-sample.component";
import { WidgetOverviewComponent } from "./components/widget-overview/widget-overview.component";
import { DoodadOverviewComponent } from "./components/doodad-overview/doodad-overview.component";

const routes: Routes = [
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.FormSample, component: FormSampleComponent },
  { path: ROUTES_ENUM.WidgetOverview, component: WidgetOverviewComponent },
  { path: ROUTES_ENUM.DoodadOverview, component: DoodadOverviewComponent },
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
