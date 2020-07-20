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
    },
    {
      name: "Online Consultations",
      icon: "fa fa-user"
    },
    {
      name: "Video Call",
      icon: "fa fa-video-camera",
    },
  ];
  constructor(private _router: Router) {}

  ngOnInit(): void {}

  tabClick(comp) {
    console.log(comp);
    if(comp.name === 'Online Consultations') {
      console.log('here');
      this._router.navigate([`admin/online-consultation`]);
    }
    this._router.navigate([`admin/${comp.name.toLowerCase()}`]);
  }
}
