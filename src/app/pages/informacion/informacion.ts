import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
  constructor(
    private title: Title,
    private meta: Meta,
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Nuestras Tiendas | Vestizo - Galería La Moda de Gamarra Lima');
    this.meta.updateTag({
      name: 'description',
      content:
        'Visítanos en Galería La Moda de Gamarra, Jr. Sebastián Barranca 1595, tiendas 127-128, Lima. Lunes a viernes 8am-6pm, sábados 8am-2pm. Envíos a todo el Perú.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'tienda Vestizo Gamarra, dirección Vestizo Lima, galería La Moda Gamarra, dónde comprar enterizos Lima, horario tienda moda Lima',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Nuestras Tiendas | Vestizo - Gamarra Lima',
    });
    this.meta.updateTag({
      property: 'og:description',
      content: 'Visítanos en Galería La Moda de Gamarra, Lima. Lunes a viernes 8am-6pm.',
    });
    this.meta.updateTag({ property: 'og:url', content: 'https://vestizo.vercel.app/informacion' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}
