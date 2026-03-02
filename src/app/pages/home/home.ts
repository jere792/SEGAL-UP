import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


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
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Vestizo - Moda Exclusiva');
  }
}
