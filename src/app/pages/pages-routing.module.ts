import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PagesComponent } from "./pages.component";

const routes: Routes = [
  {
    path: "",
    component: PagesComponent,
    children: [
      {
        path: "",
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: 'login',
        loadChildren: './login/login.module#LoginModule'
      },
      {
        path: "doctors",
        loadChildren: "./doctors/doctors.module#DoctorsModule",
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
