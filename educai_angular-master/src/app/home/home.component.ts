import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  images = [
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'nature1',
    },
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'nature2',
    },
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'person1',
    },
    {
      imageSrc:
        './assets/images/cards/geografia.jfif',
      imageAlt: 'person2',
    },
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
