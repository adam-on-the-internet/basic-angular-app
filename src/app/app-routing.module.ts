import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { RestSampleComponent } from "./components/rest-sample/rest-sample.component";
import { ROUTES_ENUM } from "./constants/routing.constants";

const routes: Routes = [
  { path: ROUTES_ENUM.Dashboard, component: DashboardComponent },
  { path: ROUTES_ENUM.Info, component: InfoComponent },
  { path: ROUTES_ENUM.RestSample, component: RestSampleComponent },
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
