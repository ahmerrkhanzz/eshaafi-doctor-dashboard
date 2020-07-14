import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-promotions",
  templateUrl: "./promotions.component.html",
  styleUrls: ["./promotions.component.scss"],
})
export class PromotionsComponent implements OnInit {
  @Input() data: any;
  constructor() {}

  ngOnInit(): void {}
}
