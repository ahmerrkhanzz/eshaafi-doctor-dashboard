import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { NgMultiSelectDropDownModule } from "ng-multiselect-dropdown";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { NgxGalleryModule } from "@kolkov/ngx-gallery";
import { FileUploadModule } from "@iplab/ngx-file-upload";
import { NgxDropzoneModule } from "ngx-dropzone";
import { UiSwitchModule } from "ngx-toggle-switch";

import { ConsultationsRoutingModule } from "./consultations-routing.module";
import { ConsultationsService } from "./consultations.service";
import { ConsultationsComponent } from "./consultations.component";
import { AppointmentsTableComponent } from "./appointments/appointments-table/appointments-table.component";
import { UploadPrescriptionComponent } from './appointments/upload-prescription/upload-prescription.component';

@NgModule({
  declarations: [ConsultationsComponent, AppointmentsTableComponent, UploadPrescriptionComponent],
  imports: [
    CommonModule,
    ConsultationsRoutingModule,
    NgMultiSelectDropDownModule.forRoot(),
    NgbModule,
    FormsModule,
    ReactiveFormsModule,
    NgxGalleryModule,
    FileUploadModule,
    NgxDropzoneModule,
    UiSwitchModule
  ],
  exports: [ConsultationsComponent, AppointmentsTableComponent, UploadPrescriptionComponent],
  providers: [ConsultationsService],
})
export class ConsultationsModule {}
