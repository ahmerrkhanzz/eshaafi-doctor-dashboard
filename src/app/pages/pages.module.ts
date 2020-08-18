import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UiSwitchModule } from "ngx-toggle-switch";

import { PagesRoutingModule } from "./pages-routing.module";
import { PagesComponent } from "./pages.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminAsideComponent } from "./admin-aside/admin-aside.component";
import { StatsCardComponent } from "./dashboard/stats-card/stats-card.component";


import { AppointmentService } from "./consultations/appointments/appointment.service";
import { HelperService } from "../services/helper.service";
import { VideoCallingService } from "../video-calling/video-calling.service";
import { AuthenticatedApiService } from "../services/authenticated-api.service";
import { AuthService } from "../services/auth.service";


import { ProfileModule } from "./profile/profile.module";
import { LoginModule } from "./login/login.module";
import { PagesService } from "./pages.service";
import { ProfileComponent } from "./profile/profile.component";
import { ConsultationsModule } from "./consultations/consultations.module";
import { SharedModule } from '../components/shared.module';

@NgModule({
  declarations: [
    PagesComponent,
    DashboardComponent,
    AdminAsideComponent,
    StatsCardComponent,
    ProfileComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    UiSwitchModule,
    PagesRoutingModule,
    LoginModule,
    ProfileModule,
    ConsultationsModule,
    SharedModule
  ],
  exports: [
    PagesComponent,
    DashboardComponent,
    AdminAsideComponent,
    StatsCardComponent,
    ProfileComponent,
  ],
  providers: [
    AppointmentService,
    HelperService,
    VideoCallingService,
    AuthenticatedApiService,
    AuthService,
    PagesService,
  ],
})
export class PagesModule {}
