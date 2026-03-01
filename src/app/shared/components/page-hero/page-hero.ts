import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-page-hero',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './page-hero.html',
  styleUrl: './page-hero.scss'
})
export class PageHero {
  @Input() label: string = '';
  @Input() title: string = '';
  @Input() subtitle: string = '';
}