import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { AuthService } from './auth.service';
import { HelperService } from './helper.service';
import { Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthenticatedApiService {

  baseUri = 'http://192.168.100.73:8000/api';
  authUser = this.authService.getAuthUser();
  authToken = this.authUser.token;
  headers = new HttpHeaders({
    'Content-Type': 'application/json',
    Authorization: 'Bearer ' + this.authToken
  });
  constructor(
    private http: HttpClient,
    private authService: AuthService,
    private helperService: HelperService
  ) {

  }

  get(endPoint, params?) {
    let httpParams: HttpParams;
    if (params) {
      httpParams = new HttpParams(params);
    }
    return this.http.get(`${this.baseUri}/${endPoint}`,
      { headers: this.headers, params: httpParams }).pipe(catchError((errorData: any) => this.handleError(errorData)),
        tap((responseData: any) => {
          if (responseData.status === 0) {
            let errorMessage = 'Internal Server error';
            if (responseData.error) {
              errorMessage = responseData.message;
            } else if (responseData.message) {
              errorMessage = responseData.message;
            }
            this.helperService.showToast(errorMessage,'error');
          }
        }));
  }

  post(endPoint, data) {
    return this.http.post(`${this.baseUri}/${endPoint}`, data,
      { headers: this.headers }).pipe(catchError((errorData: any) => this.handleError(errorData)),
        tap((responseData: any) => {
          if (responseData.status === 0 && endPoint !== 'ServiceStaff/restapi/api/location') {
            let errorMessage = 'Internal Server error';
            if (responseData.error) {
              errorMessage = responseData.error;
            } else if (responseData.message) {
              errorMessage = responseData.message;
            }
            this.helperService.showToast(errorMessage);
          }
        }));
  }

  handleError(errorResponse: HttpErrorResponse) {
    let errorMessage = errorResponse[`error`].error ? errorResponse[`error`].error : errorResponse.message;
    if (errorResponse.status === 401) {
      errorMessage = 'Authentication Failed!';
      // this.authService.logout();
    }
    this.helperService.showToast(errorMessage, 'error', 3000);
    return throwError(errorResponse);
  }
}
