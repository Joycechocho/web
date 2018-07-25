import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {
  images;
  constructor() { }
  selectedImage;

  setSelectedImage(image) {
    this.selectedImage = image;
  }
  ngOnInit() {
    this.images = [
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
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/6.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/7.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/8.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/9.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'},
      {'url': '/assets/images/10.JPG',
        'title': 'Aliquam erat volutpat',
        'caption': 'imperdiet imperdiet. Nullam ut ligula vitae arcu vulputate dictum ut quis elit.'}
    ];
  }

}
