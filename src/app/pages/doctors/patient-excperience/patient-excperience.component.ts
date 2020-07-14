import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-patient-excperience",
  templateUrl: "./patient-excperience.component.html",
  styleUrls: ["./patient-excperience.component.scss"],
})
export class PatientExcperienceComponent implements OnInit {
  public experiences: any[] = [
    {
      name: "Teresa Fox",
      img: "../../../../assets/images/users/1.jpg",
      time: "04 days ago",
      comment:
        "Doctor is perfect , my mom felt that she is comfertable once she sit with him , very friendly makes you feel that he knew you long time ago , Dr. Vikas goes thru details for the history of the pain , Of couser you feel in safe hands , very cooperative team and coordinator , special thanks for dr Neha senior manager who always give you support and hope she never said she cant. Recommended hospital and doctors .",
    },
    {
      name: "Giannis Nelson",
      img: "../../../../assets/images/users/2.jpg",
      time: "09 days ago",
      comment:
        "Doctor knows about his subject very well. He is excellent in his field ,doctor explaimed us about the illness ,my friend was suffering , very well. Also the treatment guidelines as per international Protocol. Also special thanks to his coordinator Dr Neha, she helped us alot",
    },
    {
      name: "Nick Mana",
      img: "../../../../assets/images/users/3.jpg",
      time: "15 days ago",
      comment:
        "Very good.it was a very good and satisfactory visit. Thank you so much sir to join Manipal hospital.",
    },
    {
      name: "Verlona Onike Jah Tucker",
      img: "../../../../assets/images/doctors/4.jpg",
      time: "8 days ago",
      comment:
        "My name is Verlona and I am a Sierra Leonean living in the U.K. I came to India with Mr X who is my husbands brother who was severely ill and in unyeilding pain. Firstly I was well impressed with Dr Vikas Guptas approach and I remember telling him that he has a way of making people feel comfortable which is obviously good for patients visiting the hospital. He diagnosed the problem at a glance and was very confident when he told the Patient that he would do his surgery the next day. I was like WOW !!! He went to to explain the Procedure before and after surgery and he made sure to check on the patients progress daily until he deemed it fit to discharge .He has a very good team and all the doctors in his team are well mannered and communicate well with the patient and family. The doctors play a great role in motivating me and the patient.",
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
