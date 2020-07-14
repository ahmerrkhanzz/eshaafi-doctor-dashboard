import { Component, OnInit } from "@angular/core";
import { NgbActiveModal } from "@ng-bootstrap/ng-bootstrap";


@Component({
  selector: "app-upload-prescription",
  templateUrl: "./upload-prescription.component.html",
  styleUrls: ["./upload-prescription.component.scss"],
})
export class UploadPrescriptionComponent implements OnInit {
  
  constructor(public activeModal: NgbActiveModal) {}

  ngOnInit(): void {}

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
}
