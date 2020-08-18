import { Injectable } from "@angular/core";
import {
  HttpInterceptor,
  HttpEvent,
  HttpResponse,
  HttpRequest,
  HttpHandler,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { map, filter } from "rxjs/operators";

@Injectable()
export class HeaderInterceptor implements HttpInterceptor {
  intercept(
    httpRequest: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    let accessTOken = "";
    if (localStorage.hasOwnProperty("authUser")) {
      const userInfo = JSON.parse(localStorage.getItem("authUser"));
      accessTOken = userInfo.token;
    }

    return next.handle(
      httpRequest.clone({
        setHeaders: {
          Authorization: "Bearer " + accessTOken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      })
    );
  }
}
