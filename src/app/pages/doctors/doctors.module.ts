import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { Ng5SliderModule } from "ng5-slider";
import { SharedModule } from 'src/app/components/shared.module';

import { DoctorsRoutingModule } from "./doctors-routing.module";
import { AsideComponent } from "./aside/aside.component";
import { DoctorsComponent } from './doctors.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { DoctorsListComponent } from './doctors-list/doctors-list.component';
import { VideoConsultBookingComponent } from './video-consult-booking/video-consult-booking.component';
import { PatientExcperienceComponent } from './patient-excperience/patient-excperience.component';
import { DoctorServicesComponent } from './doctor-services/doctor-services.component';
import { DoctorExperienceComponent } from './doctor-experience/doctor-experience.component';
import { DoctorFaqComponent } from './doctor-faq/doctor-faq.component';

@NgModule({
  declarations: [DoctorsComponent, AsideComponent, DoctorProfileComponent, DoctorsListComponent, VideoConsultBookingComponent, PatientExcperienceComponent, DoctorServicesComponent, DoctorExperienceComponent, DoctorFaqComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule,
    Ng5SliderModule,
    SharedModule,
    DoctorsRoutingModule,
  ],
  exports: [DoctorsComponent, AsideComponent, DoctorProfileComponent, DoctorsListComponent, VideoConsultBookingComponent, PatientExcperienceComponent, DoctorServicesComponent, DoctorExperienceComponent, DoctorFaqComponent],
})
export class DoctorsModule {}
