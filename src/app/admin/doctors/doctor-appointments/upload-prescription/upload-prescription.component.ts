import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AppointmentService } from '../services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';

@Component({
  selector: "app-upload-prescription",
  templateUrl: "./upload-prescription.component.html",
  styleUrls: ["./upload-prescription.component.scss"],
})
export class UploadPrescriptionComponent implements OnInit {
  @Input() public appointment_id: any;
  public authUser: any;
  
  constructor(
    public activeModal: NgbActiveModal,
    private appointmentService: AppointmentService,
    private helperService: HelperService,
    private authService: AuthService
    ) {}
  private unsubscribe: Subject<any> = new Subject();
  
  ngOnInit(): void {
    this.authUser = this.authService.getAuthUser();
  }

  close() {
    this.activeModal.close("Save click");
  }

  files: File[] = [];
 
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }
  
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  submit() {
    const user_id = this.authUser.id;
    this.appointmentService.uploadFiles(user_id, this.appointment_id, this.files)
    .pipe(takeUntil(this.unsubscribe)).subscribe(
      (successResponse: any) => {
        this.helperService.showToast(successResponse.message, 'success');
        this.close();
      },
      (errorResponse: any) => {
        console.log(errorResponse);
      }
    );
  }
}
