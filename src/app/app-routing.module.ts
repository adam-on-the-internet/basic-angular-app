import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { RestSampleComponent } from "./components/rest-sample/rest-sample.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardComponent },
  { path: "info", component: InfoComponent },
  { path: "rest-sample", component: RestSampleComponent },
  { path: "**", redirectTo: "dashboard" },
];

@NgModule({
  exports: [RouterModule],
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
})
export class AppRoutingModule { }
