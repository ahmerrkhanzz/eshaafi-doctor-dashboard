import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { PagesService } from "../pages.service";

@Component({
  selector: "app-admin-aside",
  templateUrl: "./admin-aside.component.html",
  styleUrls: ["./admin-aside.component.scss"],
})
export class AdminAsideComponent implements OnInit {
  public navList = [
    {
      name: "Dashboard",
      icon: "fab fa-buffer",
      routeName: "dashboard",
    },
    {
      name: "My Profile",
      icon: "fa fa-user",
      routeName: "profile",
    },
    {
      name: "Online Consultations",
      icon: "fa fa-user",
      routeName: "online-consultation",
    },
    {
      name: "Logout",
      icon: "fas fa-sign-out-alt",
      routeName: "logout",
    },
  ];
  constructor(private _router: Router, private _pagesService: PagesService) {}

  ngOnInit(): void {}

  tabClick(comp) {
    if (comp.routeName === "logout") {
      this._pagesService.logout().subscribe(
        (res: any) => {
          console.log(res);
          this._router.navigate([`/`]);
          // localStorage.clear();
        },
        (err: any) => {
          console.log(err);
        }
      );
    } else {
      this._router.navigate([`/${comp.routeName.toLowerCase()}`]);
    }
  }
}
