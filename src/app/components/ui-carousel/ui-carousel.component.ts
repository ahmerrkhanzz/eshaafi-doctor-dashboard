import { Component, OnInit, ViewChild, Input } from "@angular/core";
import {
  NguCarousel,
  NguCarouselConfig,
  NguCarouselStore,
} from "@ngu/carousel";

@Component({
  selector: "app-ui-carousel",
  templateUrl: "./ui-carousel.component.html",
  styleUrls: ["./ui-carousel.component.scss"],
})
export class UiCarouselComponent implements OnInit {
  @Input() data: any
  @Input() config: any
  @Input() clientCLass: string
  @Input() showBookButton: boolean
  
  public carouselOne: NguCarouselConfig;
  public showVideo: boolean = false;
  public index: number;
  public dataList: Array<any> = [
    {
      img: "../../../assets/images/doctors/1.jpg",
      title: "Neurosurgeon",
      name: "Collis Molate",
      description:
        "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
      img: "../../../assets/images/doctors/2.jpg",
      title: "Neurosurgeon",
      name: "Domani Plavon",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/3.jpg",
      title: "Dental Surgeon",
      name: "John Mard",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/4.jpg",
      title: "Gynocologist",
      name: "Amanal Frond",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/5.jpg",
      title: "Neurosurgeon",
      name: "Dr. Addition Smith",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
    {
      img: "../../../assets/images/doctors/6.jpg",
      title: "Dental Surgeon",
      name: "Dr. Louis Morris",
      description:
        "It is a long established fact that a reader will be distracted by the readable",
    },
  ];
  public relatedVideo;
  constructor() {}

  ngOnInit() {
    console.log(this.data);

    this.carouselOne = this.config;
  }
}
