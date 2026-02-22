import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-instagram-follow',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './instagram-follow.html',
  styleUrl: './instagram-follow.scss'
})
export class InstagramFollow {
  instagramHandle: string = '@segalupperu';
  instagramUrl: string = 'https://www.instagram.com/segalupmodaperu/';

  openInstagram(): void {
    window.open(this.instagramUrl, '_blank');
  }
}
