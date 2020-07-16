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

}
