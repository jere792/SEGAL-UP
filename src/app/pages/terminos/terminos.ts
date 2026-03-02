import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-terminos',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './terminos.html',
  styleUrl: './terminos.scss',
})
export class Terminos implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Términos y Condiciones - Vestizo');
  }
}
