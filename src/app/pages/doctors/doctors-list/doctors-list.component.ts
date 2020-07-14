import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-doctors-list",
  templateUrl: "./doctors-list.component.html",
  styleUrls: ["./doctors-list.component.scss"],
})
export class DoctorsListComponent implements OnInit {
  page: number = 1;
  doctors: any[] = [
    {
      name: "Dr. Jane C. Wright",
      id: 1,
      img: "../../../assets/images/doctors/large-1.jpg",
      qualification: "MBBS, SRCP, FCPS",
      specialization: "Cardiologist",
      likes: 95,
      experience: 5,
      fees: 2500,
      verified: true,
      available: true,
    },
    {
      name: "Dr. Gertrude B. Elion",
      id: 2,
      img: "../../../assets/images/doctors/13.jpg",
      qualification: "MBBS, SRCP, FCPS",
      specialization: "Certified Dermatologist",
      likes: 105,
      experience: 8,
      fees: 3000,
      verified: true,
      available: true,
    },
    {
      name: "Dr. Gerty Cori",
      id: 3,
      img: "../../../assets/images/doctors/11.png",
      qualification: "MBBS, SRCP, FCPS",
      specialization: "Family Physician",
      likes: 96,
      experience: 7,
      fees: 5000,
      verified: true,
      available: false,
    },
    {
      name: "Dr. Elisabeth Kübler",
      id: 4,
      img: "../../../assets/images/doctors/15.jpg",
      qualification: "MBBS, SRCP, FCPS",
      specialization: "Hematologist",
      likes: 105,
      experience: 10,
      fees: 2500,
      verified: true,
      available: false,
    },
    {
      name: "Dr. Virginia Apgar",
      id: 5,
      img: "../../../assets/images/doctors/large-5.jpg",
      qualification: "MBBS, SRCP, FCPS",
      specialization: "Neurologist",
      likes: 805,
      experience: 5,
      fees: 4000,
      verified: true,
      available: true,
    },
  ];
  constructor() {}

  ngOnInit(): void {
    localStorage.setItem("doctors", JSON.stringify(this.doctors));
  }
}
