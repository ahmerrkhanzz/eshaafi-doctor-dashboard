import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UploadPrescriptionComponent } from "../upload-prescription/upload-prescription.component";
import { Router } from "@angular/router";
import { HelperService } from 'src/app/services/helper.service';
import { AppointmentService } from '../services/appointment.service';
import { AuthService } from 'src/app/services/auth.service';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
@Component({
  selector: "app-appointments-table",
  templateUrl: "./appointments-table.component.html",
  styleUrls: ["./appointments-table.component.scss"],
})
export class PatientsTableComponent implements OnInit {
  status = [];
  selectedItems = [];
  dropdownSettings = {};
  appointments: any[];
  page: any;
  pageSize: any;
  perPage: any;
  total: any;
  currentPage: any;

  constructor(
    private _modalService: NgbModal,
    private _router:Router,
    private helperService: HelperService,
    private appoitmentService: AppointmentService,
    private authService: AuthService,
    ) {}
    private unsubscribe: Subject<any> = new Subject();
  ngOnInit() {
    const authUser = this.authService.getAuthUser();

    this.loadAppointments(authUser.id);
    // this.status = [
    //   { item_id: 1, item_text: "Pending" },
    //   { item_id: 2, item_text: "Cancelled" },
    //   { item_id: 3, item_text: "Not appeared" },
    //   { item_id: 4, item_text: "Completed" },
    // ];

    // this.selectedItems = [
    //   { item_id: 3, item_text: "Pune" },
    //   { item_id: 4, item_text: "Navsari" },
    // ];
    // this.dropdownSettings = {
    //   singleSelection: false,
    //   idField: "item_id",
    //   textField: "item_text",
    //   selectAllText: "Select All",
    //   unSelectAllText: "UnSelect All",
    //   itemsShowLimit: 4,
    //   allowSearchFilter: true,
    // };
  }

  loadAppointments(id) {
    this.appoitmentService.getAppointments(id)
      .pipe(takeUntil(this.unsubscribe)).subscribe(
        (successResponse: any) => {
          this.appointments = successResponse.data;
          this.currentPage = successResponse.current_page;
          this.total = successResponse.total;

          console.log(successResponse);
        },
        (errorResponse: any) => {
          console.log(errorResponse);
        }
      );
  }

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  addPrescription() {
    const modalRef = this._modalService.open(UploadPrescriptionComponent, {
      size: "lg",
    });
    modalRef.componentInstance.name = "World";
  }

  videoCall() {
    this._router.navigate([`/admin/video-call`]);
  }

}
