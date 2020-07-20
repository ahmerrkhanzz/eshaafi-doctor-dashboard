import { Injectable } from '@angular/core';
import { AuthenticatedApiService } from 'src/app/services/authenticated-api.service';

@Injectable({
  providedIn: 'root'
})
export class VideoCallingService {

  constructor(
    private apiService: AuthenticatedApiService,
    ) { }

    makeCall(id: any, appointment_id: any) {
      return this.apiService.post('doctor/' + id +'/appointment/' + appointment_id + '/call', {device_type: 'web'});
    }

    callSync(status: any, channelName: any) {
      return this.apiService.post('call/sync/' + channelName, {status: status, device_type: 'web'});
    }
}
