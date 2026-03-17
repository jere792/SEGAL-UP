import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
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
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Sobre Nosotros | Vestizo - Moda Femenina desde Gamarra Lima');
    this.meta.updateTag({
      name: 'description',
      content: 'Conoce la historia de Vestizo, marca de moda femenina peruana desde Gamarra. Creando enterizos y vestidos exclusivos con envíos a todo el Perú.'
    });
    this.meta.updateTag({
      name: 'keywords',
      content: 'Vestizo historia, moda femenina Gamarra, marca peruana enterizos, quiénes somos Vestizo, ropa mujer Lima'
    });
    this.meta.updateTag({ property: 'og:title', content: 'Sobre Nosotros | Vestizo - Moda Femenina Gamarra' });
    this.meta.updateTag({ property: 'og:description', content: 'Conoce la historia de Vestizo. Moda femenina exclusiva desde Gamarra, Lima.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://vestizo.vercel.app/sobre-nosotros' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}