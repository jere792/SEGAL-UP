import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-sobre-nosotros',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './sobre-nosotros.html',
  styleUrl: './sobre-nosotros.scss',
})
export class SobreNosotros implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Sobre Nosotros - Vestizo');
  }
}
