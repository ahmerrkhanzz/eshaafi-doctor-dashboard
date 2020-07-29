import { Component, OnInit, Input } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";
import { AppointmentService } from '../services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { HelperService } from 'src/app/services/helper.service';
import { FileUploadControl, FileUploadValidators } from '@iplab/ngx-file-upload';


@Component({
  selector: "app-upload-prescription",
  templateUrl: "./upload-prescription.component.html",
  styleUrls: ["./upload-prescription.component.scss"],
})
export class UploadPrescriptionComponent implements OnInit {
  @Input() public appointment_id: any;
  public authUser: any;
  reports: any = [];
  type= 1;
  options: "";
  
  public fileUploadControl = new FileUploadControl(FileUploadValidators.filesLimit(2));

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

  close(uploadFiles: any[] = []) {
    this.activeModal.close(uploadFiles);
  }

  files: File[] = [];
 
  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
    this.readFile(this.files[0]).then(fileContents => {
      // Put this string in a request body to upload it to an API.
      this.reports.push(fileContents);
      console.log(this.reports);
    });
  }
  
  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  submit() {
    const user_id = this.authUser.id;
    this.appointmentService.uploadFiles(user_id, this.appointment_id, this.reports)
    .pipe(takeUntil(this.unsubscribe)).subscribe(
      (successResponse: any) => {
        this.helperService.showToast(successResponse.message, 'success');
        this.close(successResponse.data);
      },
      (errorResponse: any) => {
        console.log(errorResponse);
      }
    );
  }


  private async readFile(file: File): Promise<string | ArrayBuffer> {
    return new Promise<string | ArrayBuffer>((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = e => {
        return resolve((e.target as FileReader).result);
      };

      reader.onerror = e => {
        console.error(`FileReader failed on file ${file.name}.`);
        return reject(null);
      };

      if (!file) {
        console.error('No file to read.');
        return reject(null);
      }

      reader.readAsDataURL(file);
    });
  }
}
