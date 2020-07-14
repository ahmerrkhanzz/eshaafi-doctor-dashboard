import { Component, OnInit, Input } from "@angular/core";
import { Router } from "@angular/router";

@Component({
  selector: "app-linear-cards",
  templateUrl: "./linear-cards.component.html",
  styleUrls: ["./linear-cards.component.scss"],
})
export class LinearCardsComponent implements OnInit {
  @Input() doctor: any;
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  viewProfile = (id: number) => {
    this._router.navigate(["/doctors/", id]);
  };
}
