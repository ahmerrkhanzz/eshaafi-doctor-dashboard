import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-doctor-profile",
  templateUrl: "./doctor-profile.component.html",
  styleUrls: ["./doctor-profile.component.scss"],
})
export class DoctorProfileComponent implements OnInit {
  services: any[] = [
    "Neuro Oncology",
    "Cerebrovascular Surgery",
    "InterventionalNeuro-Radiology",
    "Percutaneous coiling",
    "Surgical clipping of intracranial aneurysms",
    "Embolization of brain vascular malformations",
    "Tumour embolizations",
    "Carotid artery interventions both endovascular and microsurgical",
    "Acute stroke interventions",
    "Management of Intra-cerebral haemorrhages",
    "Neurovascular Surgeon",
    "Neurointevention Specialist",
    "Strokologist",
    "Deep Brain Stimulation",
    "Brain Tumor Surgery",
  ];
  public selectedDoctor: any = [];
  private sub: any;
  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    const doctors = JSON.parse(localStorage.getItem("doctors"));
    this.sub = this.route.params.subscribe((params) => {
      console.log(params);
      this.selectedDoctor = doctors.filter(
        (e) => e.id === parseInt(params.doctorId)
      );  
    });
    console.log(this.selectedDoctor);
  }
}
