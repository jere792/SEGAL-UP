import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-privacidad',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './privacidad.html',
  styleUrl: './privacidad.scss',
})
export class Privacidad implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Política de Privacidad - Vestizo');
  }
}
