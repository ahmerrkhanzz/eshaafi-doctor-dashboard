import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { UiSwitchModule } from "ngx-toggle-switch";

import { AdminRoutingModule } from "./admin-routing.module";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AdminAsideComponent } from "./admin-aside/admin-aside.component";
import { StatsCardComponent } from "./dashboard/stats-card/stats-card.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { PatientsTableComponent } from "./doctors/doctor-appointments/appointments-table/appointments-table.component";
import { AddDoctorComponent } from "./doctors/add-doctor/add-doctor.component";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { DoctorAppointmentsComponent } from "./doctors/doctor-appointments/doctor-appointments.component";
import { UploadPrescriptionComponent } from './doctors/doctor-appointments/upload-prescription/upload-prescription.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { AppointmentService } from './doctors/doctor-appointments/services/appointment.service';
import { HelperService } from '../services/helper.service';
import { VideoCallingService } from '../video-calling/video-calling.service';
import { AuthenticatedApiService } from '../services/authenticated-api.service';
import { AuthService } from '../services/auth.service';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    AdminAsideComponent,
    StatsCardComponent,
    DoctorsComponent,
    PatientsTableComponent,
    AddDoctorComponent,
    DoctorAppointmentsComponent,
    UploadPrescriptionComponent,
  ],
  imports: [
    CommonModule,
    NgbModule,
    UiSwitchModule,
    AdminRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgxDropzoneModule
    
  ],
  exports: [
    AdminComponent,
    DashboardComponent,
    AdminAsideComponent,
    StatsCardComponent,
    DoctorsComponent,
    PatientsTableComponent,
    AddDoctorComponent,
  ],
  providers: [AppointmentService, HelperService, VideoCallingService, AuthenticatedApiService, AuthService],
})
export class AdminModule {}
