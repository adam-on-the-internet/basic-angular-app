import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { HttpClientModule } from "@angular/common/http";
import { FormSampleComponent } from "./components/form-sample/form-sample.component";
import { WidgetDisplayComponent } from "./components/widget-display/widget-display.component";
import { WidgetOverviewComponent } from "./components/widget-overview/widget-overview.component";
import { DoodadOverviewComponent } from "./components/doodad-overview/doodad-overview.component";
import { DoodadDisplayComponent } from "./components/doodad-display/doodad-display.component";
import { WidgetFormComponent } from "./components/widget-form/widget-form.component";
import { DoodadFormComponent } from "./components/doodad-form/doodad-form.component";
import { DoodadTableComponent } from "./components/doodad-table/doodad-table.component";
import { WidgetTableComponent } from "./components/widget-table/widget-table.component";
import { ActuatorReportComponent } from "./components/actuator-report/actuator-report.component";

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    FormSampleComponent,
    WidgetDisplayComponent,
    WidgetOverviewComponent,
    DoodadOverviewComponent,
    DoodadDisplayComponent,
    WidgetFormComponent,
    DoodadFormComponent,
    DoodadTableComponent,
    WidgetTableComponent,
    ActuatorReportComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
