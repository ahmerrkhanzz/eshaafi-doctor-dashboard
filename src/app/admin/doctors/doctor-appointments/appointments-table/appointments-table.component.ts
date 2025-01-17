import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UploadPrescriptionComponent } from "../upload-prescription/upload-prescription.component";
import { Router } from "@angular/router";
import { NgxGalleryOptions, NgxGalleryAction } from "@kolkov/ngx-gallery";
import { NgxGalleryImage } from "@kolkov/ngx-gallery";
import { NgxGalleryAnimation } from "@kolkov/ngx-gallery";
import { VideoCallingService } from "src/app/video-calling/video-calling.service";
import { HelperService } from "src/app/services/helper.service";
import { AppointmentService } from "../services/appointment.service";
import { AuthService } from "src/app/services/auth.service";
import { Subject } from "rxjs";
import { takeUntil } from "rxjs/operators";

@Component({
  selector: "app-appointments-table",
  templateUrl: "./appointments-table.component.html",
  styleUrls: ["./appointments-table.component.scss"],
})
export class PatientsTableComponent implements OnInit {
  status = [];
  selectedItems = [];
  dropdownSettings = {};
  appointments: any[] = [];
  page: any;
  pageSize: any;
  perPage: any;
  total: number = 0;
  currentPage: any;
  next: any;
  previous: any;
  authUser: any;
  appointmentsData: any;
  appointmentsTemp: any;
  arrayObj: any;
  objectData: any;
  filteredAppointments: any = [];
  filteredstatus: any = [];

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  constructor(
    private _modalService: NgbModal,
    private _router: Router,
    private helperService: HelperService,
    private appoitmentService: AppointmentService,
    private authService: AuthService,
    private videoCallingService: VideoCallingService
  ) {}
  private unsubscribe: Subject<any> = new Subject();

  ngOnInit() {
    this.authUser = this.authService.getAuthUser();
    this.loadAppointments(this.authUser.id);
    this.status = [
      { item_id: "pending", item_text: "Pending" },
      { item_id: "canceled", item_text: "Cancelled" },
      { item_id: "not_appeared", item_text: "Not appeared" },
      { item_id: "completed", item_text: "Completed" },
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

    this.galleryOptions = [
      {
        width: "600px",
        height: "400px",
        startIndex: 0,
        thumbnailsColumns: 4,
        arrowPrevIcon: "fa fa-chevron-left",
        arrowNextIcon: "fa fa-chevron-right",
        imageAnimation: NgxGalleryAnimation.Slide,
        thumbnailsAsLinks: true,
        imageDescription: true,
        thumbnailActions: [
          {
            icon: "fa fa-arrow-circle-right",
            onClick: this.deleteImage.bind(this),
            titleText: "delete",
          },
        ],
      },
      // max-width 800
      {
        thumbnails: false,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.galleryImages = [
      {
        small: "assets/images/records/no-image-available.jpg",
        medium: "assets/images/records/no-image-available.jpg",
        big: "assets/images/records/no-image-available.jpg",
      },
    ];
  }

  loadAppointments(id) {
    this.appoitmentService
      .getAppointments(id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (res: any) => {
          const { data, current_page, total } = res;
          this.appointments = data;
          this.appointmentsData = data;
          this.page = current_page;
          this.total = total;
          this.appointments.forEach((element) => {
            let doctorImages = [];
            element.doctor_files.forEach((e) => {
              let temp = {
                small:
                  e.file_type === "image"
                    ? e.file
                    : "../../../../../assets/images/pdf-placeholder.jpg",
                medium:
                  e.file_type === "image"
                    ? e.file
                    : "../../../../../assets/images/pdf-placeholder.jpg",
                big:
                  e.file_type === "image"
                    ? e.file
                    : "../../../../../assets/images/pdf-placeholder.jpg",
                url: e.file,
                description:
                  e.file_type !== "image"
                    ? `<a class="btn btn-outline-primary" href="${e.file}" target="_blank">Open PDF</a>`
                    : "",
              };
              doctorImages.push(temp);
              element.doctorGalleryImages = doctorImages;
            });
            let patientImages = [];
            element.patient_files.forEach((e) => {
              let temp = {
                small:
                  e.file_type === "image"
                    ? e.file
                    : "../../../../../assets/images/pdf-placeholder.jpg",
                medium:
                  e.file_type === "image"
                    ? e.file
                    : "../../../../../assets/images/pdf-placeholder.jpg",
                big:
                  e.file_type === "image"
                    ? e.file
                    : "../../../../../assets/images/pdf-placeholder.jpg",
                url: e.file,
                description:
                  e.file_type !== "image"
                    ? `<a class="btn btn-outline-primary" href="${e.file}" target="_blank">Open PDF</a>`
                    : "",
              };
              patientImages.push(temp);
              element.patientGalleryImages = patientImages;
            });
          });

          console.log(this.appointments);
        },
        (errorResponse: any) => {
          console.log(errorResponse);
        }
      );
  }
  deleteImage() {
    console.log("clicked");
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
        const ar = this.appointments.filter((e) => e.appointment_id === id);
        let temp = {
          small: result[0].file,
          medium: result[0].file,
          big: result[0].file,
        };
        let filess: any = ar[0].doctorGalleryImages.concat(temp);
        let index: any = this.appointments.findIndex(
          (x) => x.appointment_id === id
        );
        this.appointments[index].doctorGalleryImages = filess;
        console.log(this.appointments);
      }
    });
    modalRef.componentInstance.appointment_id = id;
  }
  onItemDeSelect(item: any) {
    if (this.appointments.length) {
      let index = this.filteredstatus.findIndex((x) => x === item.item_id);
      this.filteredstatus.splice(index, 1);
      this.sortByStatus(this.filteredstatus, false);
      if (this.filteredstatus.length === 0) {
        this.appointments = this.appointmentsData;
        this.filteredAppointments = [];
      }
    } else {
      let index = this.filteredstatus.findIndex((x) => x === item.item_id);
      this.filteredstatus.splice(index, 1);
      this.appointments = this.appointmentsData;
    }
  }

  videoCall(id: any) {
    this.loadCallCredentials(this.authUser.id, id);
  }

  changeStatus(id: any, appointment_status: any) {
    const user_id = this.authUser.id;
    this.appoitmentService
      .changeAppointmentStatus(user_id, id, appointment_status.target.value)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (successResponse: any) => {
          this.helperService.showToast(successResponse.message, "success");
        },
        (errorResponse: any) => {
          console.log(errorResponse);
        }
      );
  }

  loadCallCredentials(id: any, appointment_id: any) {
    this.videoCallingService
      .makeCall(id, appointment_id)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
        (successResponse: any) => {
          if (
            successResponse.data.is_expired === false &&
            successResponse.data.can_call === true
          ) {
            localStorage.setItem("appointment_id", appointment_id);
            this._router.navigate([`/videoCall`]);
          } else if (
            successResponse.data.is_expired === false &&
            successResponse.data.can_call === false
          ) {
            this.helperService.showToast("Too early", "error");
          } else {
            this.helperService.showToast("Time Expired", "error");
          }
        },
        (errorResponse: any) => {
          console.log(errorResponse);
        }
      );
  }

  sortByStatus(status: any, isSelect: any = true) {
    this.appointments = this.appointmentsData;
    this.filteredAppointments = [];
    this.appointments.forEach((element) => {
      status.forEach((e) => {
        if (element.appointment_status === e) {
          if (isSelect) {
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
    this.appoitmentService
      .getAppointmentsList(this.authUser.id, this.page)
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(
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
  //Loading PDF File in Browser New Tab
  loadPDF() {
    let newUrl = "http://africau.edu/images/default/sample.pdf";
    let currentUrl = window.location.href;
    window.open(currentUrl, "_blank");
    // on your current tab will be opened new url
    location.href = newUrl;
  }
  view(event) {
    console.log(event);
  }

  onImageChange(event) {
    console.log(event);
  }
}
