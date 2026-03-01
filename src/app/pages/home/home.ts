import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsappButton } from '../../shared/components/whatsapp-button/whatsapp-button';

import { Hero } from './components/hero/hero';
import { FeaturedCollections } from './components/featured-collections/featured-collections';
import { Benefits } from './components/benefits/benefits';
import { InstagramFollow } from './components/instagram-follow/instagram-follow';
import { PromoBanner } from './components/promo-banner/promo-banner';
import { Testimonials } from './components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WhatsappButton, Hero, FeaturedCollections, Benefits, InstagramFollow, PromoBanner, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
