import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  datasource;
  constructor() { }
  selectedImage;

  setSelectedImage(image) {
    this.selectedImage = image;
  }
  ngOnInit() {
    this.datasource = [
      {'url': '/assets/images/cool.jpg',
       'title': 'Aliquam erat volutpat',
       'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/crying.jpg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/love.jpg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/question.jpg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/shock.jpg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/shy.jpg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/sick.jpg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/smile-1.jpg',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'}
    ];
  }

}
