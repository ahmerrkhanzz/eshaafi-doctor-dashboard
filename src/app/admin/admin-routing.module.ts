import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AdminComponent } from "./admin.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { DoctorsComponent } from "./doctors/doctors.component";
import { VideoCallingComponent } from '../video-calling/video-calling.component';

const routes: Routes = [
  {
    path: "",
    component: AdminComponent,
    children: [
      {
        path: "",
        component: DashboardComponent,
      },
      {
        path: "dashboard",
        component: DashboardComponent,
      },
      {
        path: "consultation",
        component: DoctorsComponent,
      },
      {
        path:"videoCall",
        component: VideoCallingComponent
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule {}
