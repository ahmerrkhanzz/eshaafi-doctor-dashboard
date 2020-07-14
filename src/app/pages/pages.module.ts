import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";

import { PagesRoutingModule } from "./pages-routing.module";
import { HomeModule } from "./home/home.module";
import { SharedModule } from "../components/shared.module";
import { PagesComponent } from './pages.component';
import { DoctorsModule } from './doctors/doctors.module';
import { LoginModule } from './login/login.module';

@NgModule({
  declarations: [],
  imports: [CommonModule, NgbModule, PagesRoutingModule, SharedModule, HomeModule, DoctorsModule, LoginModule],
})
export class PagesModule {}
