import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  stats: any[] = [
    {
      icon: 'patient',
      value: 23,
      title: 'Registered Patients',
      class: 'green'
    },
    {
      icon: 'doctor-equipment',
      value: 32,
      title: 'Registered Doctors',
      class: 'blue'
    },
    {
      icon: 'doctor-list',
      value: 148,
      title: 'Patients Visited Today',
      class: 'green'
    },
    {
      icon: 'online-consultation',
      value: 48,
      title: 'Total Consultations',
      class: 'blue'
    }
  ]
  constructor() { }

  ngOnInit(): void {
  }

}
