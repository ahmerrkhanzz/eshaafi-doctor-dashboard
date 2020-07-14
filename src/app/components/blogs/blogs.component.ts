import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-blogs',
  templateUrl: './blogs.component.html',
  styleUrls: ['./blogs.component.scss']
})
export class BlogsComponent implements OnInit {
  @Input() blog: any

  constructor() { }

  ngOnInit(): void {
  }

}
