import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { ROUTES_ENUM } from "./constants/routing.constants";
import { FormSampleComponent } from "./components/form-sample/form-sample.component";
import { WidgetOverviewComponent } from "./components/widget-overview/widget-overview.component";
import { DoodadOverviewComponent } from "./components/doodad-overview/doodad-overview.component";
import { WidgetFormComponent } from "./components/widget-form/widget-form.component";
import { DoodadFormComponent } from "./components/doodad-form/doodad-form.component";

const routes: Routes = [
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.FormSample, component: FormSampleComponent },
  { path: ROUTES_ENUM.WidgetOverview, component: WidgetOverviewComponent },
  { path: ROUTES_ENUM.WidgetForm, component: WidgetFormComponent },
  { path: ROUTES_ENUM.DoodadOverview, component: DoodadOverviewComponent },
  { path: ROUTES_ENUM.DoodadForm, component: DoodadFormComponent },
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
