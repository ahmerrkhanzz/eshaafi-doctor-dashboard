import { Injectable } from '@angular/core';
import { AuthenticatedApiService } from 'src/app/services/authenticated-api.service';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  constructor(
    private apiService: AuthenticatedApiService
  ) { }

  getAppointments(id: any) {
    return this.apiService.post('doctor/' + id +'/appointments', {device_type: 'web'});
  }

  changeAppointmentStatus(user_id: any, id: any, appointment_status: any) {
    return this.apiService.post('doctor/' + user_id +'/appointment/' + id + '/status', {status: appointment_status});
  }

  uploadFiles(user_id: any,id: any, files: any) {
    console.log(files);
    return this.apiService.post('doctor/' + user_id +'/appointment/' + id + '/upload/prescription', {prescriptions: files});
  }

  getAppointmentsList(id: any, page: any) {
   return this.apiService.post('doctor/' + id + '/appointments?page=' + page, {device_type: 'web'});
  }

}
