import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";

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
      routeName: "dashboard"
    },
    {
      name: "Online Consultations",
      icon: "fa fa-user",
      routeName: "consultation"
    },
  {
    name: "Logout",
    icon: "fas fa-sign-out-alt",
    routeName: 'logout'
  }
  ];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  tabClick(comp) {
    if(comp.routeName === 'logout') 
    {
      localStorage.clear();
      this._router.navigate([`/`]);
    } else {
      this._router.navigate([`/${comp.routeName.toLowerCase()}`]);
    }
  }
}
