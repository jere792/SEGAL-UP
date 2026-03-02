import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { StoreMap } from '../../shared/components/store-map/store-map';

@Component({
  selector: 'app-informacion',
  standalone: true,
  imports: [CommonModule, PageHero, StoreMap],
  templateUrl: './informacion.html',
  styleUrl: './informacion.scss',
})
export class Informacion implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Nuestras Tiendas - Vestizo');
  }
}
