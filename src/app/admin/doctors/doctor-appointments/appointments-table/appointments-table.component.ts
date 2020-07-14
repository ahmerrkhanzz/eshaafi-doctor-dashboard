import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { UploadPrescriptionComponent } from "../upload-prescription/upload-prescription.component";

@Component({
  selector: "app-appointments-table",
  templateUrl: "./appointments-table.component.html",
  styleUrls: ["./appointments-table.component.scss"],
})
export class PatientsTableComponent implements OnInit {
  status = [];
  selectedItems = [];
  dropdownSettings = {};
  appointments: any[] = [
    {
      name: "Ali khan",
      phone: "+513225866369",
      gender: "Male",
      email: "bdagostini1v@cmu.edu",
      time: "09:00AM",
      date: "25-07-2020",
      fee: "RS 1500/-",
      feeStatus: "Paid",
      img: "../../../../assets/images/users/p1.jpg",
      records: [
        "../../../../assets/images/records/1.jpg",
        "../../../../assets/images/records/2.jpg",
        "../../../../assets/images/records/3.jpg",
      ],
    },
    {
      name: "Steford chris",
      phone: "+513225866369",
      gender: "Male",
      email: "bdagostini1v@cmu.edu",
      time: "09:00AM",
      date: "25-07-2020",
      fee: "RS 1000/-",
      feeStatus: "Paid",
      img: "../../../../assets/images/users/p2.jpg",
      records: [
        "../../../../assets/images/records/1.jpg",
        "../../../../assets/images/records/2.jpg",
        "../../../../assets/images/records/3.jpg",
      ],
    },

    {
      name: "John Cena",
      phone: "+513225866369",
      gender: "Male",
      email: "jc22@yehoo.edu",
      time: "09:00AM",
      date: "25-07-2020",
      fee: "RS 2000/-",
      feeStatus: "Paid",
      img: "../../../../assets/images/users/p3.jpg",
      records: [
        "../../../../assets/images/records/1.jpg",
        "../../../../assets/images/records/2.jpg",
        "../../../../assets/images/records/3.jpg",
      ],
    },

    {
      name: "Stephene",
      phone: "+513225866369",
      gender: "Female",
      email: "jc22@yehoo.edu",
      time: "09:00AM",
      date: "25-07-2020",
      fee: "RS 500/-",
      feeStatus: "Paid",
      img: "../../../../assets/images/users/1.jpg",
      records: [
        "../../../../assets/images/records/1.jpg",
        "../../../../assets/images/records/2.jpg",
        "../../../../assets/images/records/3.jpg",
      ],
    },

    {
      name: "Mark Woods",
      phone: "+513225866369",
      gender: "Male",
      email: "jc22@yehoo.edu",
      time: "09:00AM",
      date: "25-07-2020",
      fee: "RS 1500/-",
      feeStatus: "Paid",
      img: "../../../../assets/images/users/2.jpg",
      records: [
        "../../../../assets/images/records/1.jpg",
        "../../../../assets/images/records/2.jpg",
        "../../../../assets/images/records/3.jpg",
      ],
    },

    {
      name: "Zebaco Miller",
      phone: "+513225866369",
      gender: "Male",
      email: "jc22@yehoo.edu",
      time: "09:00AM",
      date: "25-07-2020",
      fee: "RS 1000/-",
      feeStatus: "Paid",
      img: "../../../../assets/images/users/3.jpg",
      records: [
        "../../../../assets/images/records/1.jpg",
        "../../../../assets/images/records/2.jpg",
        "../../../../assets/images/records/3.jpg",
      ],
    },
  ];

  constructor(private _modalService: NgbModal) {}

  ngOnInit() {
    this.status = [
      { item_id: 1, item_text: "Pending" },
      { item_id: 2, item_text: "Cancelled" },
      { item_id: 3, item_text: "Not appeared" },
      { item_id: 4, item_text: "Completed" },
    ];

    this.selectedItems = [
      { item_id: 3, item_text: "Pune" },
      { item_id: 4, item_text: "Navsari" },
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

  onItemSelect(item: any) {
    console.log(item);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  addPrescription() {
    const modalRef = this._modalService.open(UploadPrescriptionComponent, {
      size: "md",
    });
    modalRef.componentInstance.name = "World";
  }
}
