import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.scss',
})
export class SobreNosotros {}