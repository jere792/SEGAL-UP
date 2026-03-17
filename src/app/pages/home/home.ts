import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { Hero } from './components/hero/hero';
import { FeaturedCollections } from './components/featured-collections/featured-collections';
import { Benefits } from './components/benefits/benefits';
import { InstagramFollow } from './components/instagram-follow/instagram-follow';
import { PromoBanner } from './components/promo-banner/promo-banner';
import { Testimonials } from './components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, Hero, FeaturedCollections, Benefits, InstagramFollow, PromoBanner, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('Vestizo | Enterizos y Vestidos Exclusivos - Gamarra Lima Perú');

    this.meta.updateTag({
      name: 'description',
      content: 'Enterizos y vestidos exclusivos desde Gamarra, Lima. Colecciones 2026 con envíos a todo el Perú. Atención personalizada por WhatsApp. ¡Descubre la moda que te eleva!'
    });

    this.meta.updateTag({
      name: 'keywords',
      content: 'enterizos Lima, vestidos Gamarra, moda femenina Perú, ropa exclusiva Lima, enterizos 2026, vestidos elegantes Perú, moda Gamarra, ropa mujer Lima'
    });

    this.meta.updateTag({ property: 'og:title', content: 'Vestizo | Enterizos y Vestidos Exclusivos - Gamarra Lima' });
    this.meta.updateTag({ property: 'og:description', content: 'Enterizos y vestidos exclusivos desde Gamarra, Lima. Envíos a todo el Perú. Atención por WhatsApp.' });
    this.meta.updateTag({ property: 'og:url', content: 'https://vestizo.vercel.app/' });
    this.meta.updateTag({ property: 'og:type', content: 'website' });
    this.meta.updateTag({
      property: 'og:image',
      content: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772419258/370e5599-fea6-43e7-9f86-175c0631eb09_aafriv.png'
    });

    this.meta.updateTag({ name: 'twitter:title', content: 'Vestizo | Enterizos y Vestidos Exclusivos - Gamarra Lima' });
    this.meta.updateTag({ name: 'twitter:description', content: 'Enterizos y vestidos exclusivos desde Gamarra, Lima. Envíos a todo el Perú.' });
    this.meta.updateTag({
      name: 'twitter:image',
      content: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772419258/370e5599-fea6-43e7-9f86-175c0631eb09_aafriv.png'
    });

    // Canonical
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }
}