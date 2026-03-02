import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './terminos.html',
  styleUrl: './terminos.scss',
})
export class Terminos {}