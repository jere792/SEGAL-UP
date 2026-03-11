import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home-hero',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './hero.html',
  styleUrl: './hero.scss'
})
export class Hero implements OnInit {

  private heroImage =
    'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772586969/44134f0d-d5c7-48e7-84e7-e32981f25184_zgukqe.png';

  ngOnInit(): void {
    const preload = new Image();
    preload.src = this.heroImage;
  }

}