import { Injectable } from "@angular/core";
import { baseApi } from "../../constants/base.url";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class ConsultationsService {
  constructor(private _http: HttpClient) {}

  getAppointments(id: number, params) {
    let url: string = `/doctor/${id}/appointments`;
    return this._http.post(baseApi + url, params);
  }
}
