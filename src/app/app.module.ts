import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";

import { AppComponent } from "./app.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";
import { InfoComponent } from "./components/info/info.component";
import { AppRoutingModule } from "./app-routing.module";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { RestSampleComponent } from "./components/rest-sample/rest-sample.component";
import { HttpClientModule } from "@angular/common/http";
import { FormSampleComponent } from "./components/form-sample/form-sample.component";
import { WidgetDisplayComponent } from './components/widget-display/widget-display.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    InfoComponent,
    NavbarComponent,
    FooterComponent,
    RestSampleComponent,
    FormSampleComponent,
    WidgetDisplayComponent
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
