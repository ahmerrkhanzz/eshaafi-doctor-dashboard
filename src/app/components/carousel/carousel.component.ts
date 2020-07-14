import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-carousel",
  templateUrl: "./carousel.component.html",
  styleUrls: ["./carousel.component.scss"],
})
export class CarouselComponent implements OnInit {
  images = [1, 2, 3].map((n) => `../../../assets/images/${n}.jpg`);
  constructor() {}

  ngOnInit(): void {}
}
