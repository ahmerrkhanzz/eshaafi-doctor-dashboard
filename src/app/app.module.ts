import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { PagesComponent } from "./pages/pages.component";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { PagesModule } from "./pages/pages.module";
import { SharedModule } from "./components/shared.module";
import { NotFoundComponent } from "./not-found/not-found.component";
import { AdminModule } from "./admin/admin.module";
import { environment } from 'src/environments/environment';
import { NgxAgoraModule } from 'ngx-agora';
import { VideoCallingComponent } from './video-calling/video-calling.component';
import { NgxNavDrawerModule } from 'ngx-nav-drawer';



@NgModule({
  declarations: [
    AppComponent,
    PagesComponent,
    NotFoundComponent,
    VideoCallingComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    PagesModule,
    SharedModule,
    AdminModule,
    NgxAgoraModule.forRoot({ AppID: environment.agora.appId }),
    NgxNavDrawerModule
   
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [NotFoundComponent,VideoCallingComponent],
})
export class AppModule {}
