import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'These Are Some Cool Photos!';
  image1 = 'https://static.ark.org/eeuploads/adhe/Whitaker_Point.jpg';
  image2 = 'https://cdn.thecrazytourist.com/wp-content/uploads/2019/07/ccimage-shutterstock_1098228866.jpg';
  image3 = 'https://i.pinimg.com/originals/4d/72/96/4d72962c7edec3ef940bc5d8f59d963a.jpg';

  constructor() { }

  ngOnInit() {
  }

}