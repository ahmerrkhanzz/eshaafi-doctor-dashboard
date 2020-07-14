import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-doctor-info-card',
  templateUrl: './doctor-info-card.component.html',
  styleUrls: ['./doctor-info-card.component.scss']
})
export class DoctorInfoCardComponent implements OnInit {
  @Input() doctor: any
  constructor() { }

  ngOnInit(): void {
    console.log(this.doctor);
    
  }

}
