import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DoctorsComponent } from "./doctors.component";
import { DoctorProfileComponent } from "./doctor-profile/doctor-profile.component";
import { DoctorsListComponent } from "./doctors-list/doctors-list.component";

const routes: Routes = [
  {
    path: "",
    component: DoctorsComponent,
    children: [
      {
        path: "",
        component: DoctorsListComponent,
      },
      {
        path: "doctors/:doctorId",
        component: DoctorProfileComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DoctorsRoutingModule {}
