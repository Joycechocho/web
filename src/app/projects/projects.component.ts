import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  pictures;
  constructor() { }

  ngOnInit() {
    this.pictures = [
      {'url': '/assets/images/1.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/2.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/3.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/4.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/5.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'}
    ];
  }

}
