import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.scss',
})
export class Privacidad {}