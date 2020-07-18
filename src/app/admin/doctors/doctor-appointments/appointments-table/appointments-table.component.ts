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
  appointments: any = {};
  page: any;
  pageSize: any;
  perPage: any;
  total: number = 0;
  currentPage: any;
  next: any;
  previous: any;
  authUser: any;
  appointmentsData: any;
  arrayObj: any;
  objectData: any;
  filteredAppointments : any = [];
  filteredstatus : any = [];

  constructor(
    private _modalService: NgbModal,
    private _router:Router,
    private helperService: HelperService,
    private appoitmentService: AppointmentService,
    private authService: AuthService,
    ) {}
  private unsubscribe: Subject<any> = new Subject();
  ngOnInit() {
    this.authUser = this.authService.getAuthUser();
    this.loadAppointments(this.authUser.id);
    this.status = [
      { item_id: 'pending', item_text: "Pending" },
      { item_id: 'canceled', item_text: "Cancelled" },
      { item_id: 'not_appeared', item_text: "Not appeared"},
      { item_id: 'completed', item_text: "Completed" },
    ];

    this.dropdownSettings = {
      singleSelection: false,
      idField: "item_id",
      textField: "item_text",
      selectAllText: "Select All",
      unSelectAllText: "UnSelect All",
      itemsShowLimit: 4,
      allowSearchFilter: true,
    };
  }

  loadAppointments(id) {
    this.appoitmentService.getAppointments(id)
      .pipe(takeUntil(this.unsubscribe)).subscribe(
        (successResponse: any) => {
          this.appointments = successResponse.data;
          this.appointmentsData = successResponse.data;
          this.page = successResponse.current_page;
          this.total = successResponse.total;
        },
        (errorResponse: any) => {
          console.log(errorResponse);
        }
      );
  }

  onItemSelect(item: any) {
    console.log(this.filteredstatus);
    if (!this.filteredstatus.some((x) => x == item.item_id)) {
      this.filteredstatus.push(item.item_id);
      this.sortByStatus(this.filteredstatus);
    } else {
      this.sortByStatus(this.filteredstatus);
    }
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  addPrescription(id: any) {
    console.log(id);
    const modalRef = this._modalService.open(UploadPrescriptionComponent, {
      size: "lg",
    });
    modalRef.result.then((result) => {
      if (result) {
        console.log(result);
        console.log(this.appointments);
        const ar = this.appointments.filter(e => e.appointment_id === id);
        console.log(ar[0].files.concat(result));
        let filess = ar[0].files.concat(result);
        let index = this.appointments.findIndex(x => x.appointment_id === id);
        this.appointments[index].files = filess;
      }
    });
    modalRef.componentInstance.appointment_id = id;
  }

  onItemDeSelect(item: any) {
    if(this.appointments.length) {
      let index = this.filteredstatus.findIndex(x => x === item.item_id);
      this.filteredstatus.splice(index, 1);
      this.sortByStatus(this.filteredstatus, false);
      if(this.filteredstatus.length === 0) {
        this.appointments = this.appointmentsData;
        this.filteredAppointments = [];
      }
    } else {
      let index = this.filteredstatus.findIndex(x => x === item.item_id);
      this.filteredstatus.splice(index, 1);
      this.appointments = this.appointmentsData;
    }
    
  }

  videoCall() {
    this._router.navigate([`/admin/video-call`]);
  }

  changeStatus(id: any, appointment_status: any) {
    const user_id = this.authUser.id;
    this.appoitmentService.changeAppointmentStatus(user_id, id, appointment_status.target.value)
      .pipe(takeUntil(this.unsubscribe)).subscribe(
        (successResponse: any) => {
          this.helperService.showToast(successResponse.message, 'success');
        },
        (errorResponse: any) => {
          console.log(errorResponse);
        }
      );
  }

  sortByStatus(status: any , isSelect: any = true) {
    this.appointments = this.appointmentsData;
    this.filteredAppointments = [];
    this.appointments.forEach(element => {
      status.forEach(e => {
        if(element.appointment_status === e) {
          if(isSelect) {
            this.filteredAppointments.push(element);
          } else {
            this.filteredAppointments.push(element);
              // let index = this.filteredAppointments.findIndex(x => x.appointment_status === e);
              // this.filteredAppointments.splice(index, 1);
          }
          
        }
      });
    });
    this.appointments = this.filteredAppointments;
    console.log(this.appointments);
  }

  // get next and previous appointments
  getPageFromService() {
    this.appoitmentService.getAppointmentsList(this.authUser.id, this.page)
    .pipe(takeUntil(this.unsubscribe)).subscribe(
    (successResponse: any) => {
      this.appointments = successResponse.data;
      this.appointmentsData = successResponse.data;
      this.currentPage = successResponse.current_page;
      this.total = successResponse.total;
      this.next = successResponse.next;
      this.previous = successResponse.previous;
    },
    (errorResponse: any) => {
      console.log(errorResponse);
    }
  );
  }
}
