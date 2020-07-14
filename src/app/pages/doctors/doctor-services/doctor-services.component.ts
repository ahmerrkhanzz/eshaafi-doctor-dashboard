import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-services',
  templateUrl: './doctor-services.component.html',
  styleUrls: ['./doctor-services.component.scss']
})
export class DoctorServicesComponent implements OnInit {
  @Input() service: string
  constructor() { }

  ngOnInit(): void {
  }

}
