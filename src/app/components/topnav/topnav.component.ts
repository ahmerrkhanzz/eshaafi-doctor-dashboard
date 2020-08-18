import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { LoginComponent } from '../../admin/login/login.component';

@Component({
  selector: "app-topnav",
  templateUrl: "./topnav.component.html",
  styleUrls: ["./topnav.component.scss"],
})
export class TopnavComponent implements OnInit {
  public navs: any[] = [
    "Consult Online",
    "Doctors",
    "Medicines",
    "Lab Test",
    "Home Nursing",
  ];

  constructor(private router: Router, private _modalService: NgbModal) {}

  ngOnInit(): void {}

  navClick(page) {
    this.router.navigate([`/${page.toLowerCase()}`]);
  }

  homePage() {
    this.router.navigate([`/`]);
  }

  openLogin() {
    const modalRef = this._modalService.open(LoginComponent,{
      size: 'lg'
    });
    modalRef.componentInstance.name = "World";
  }
}
