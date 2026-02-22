import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WhatsappButton } from '../../shared/components/whatsapp-button/whatsapp-button';

import { Hero } from './components/hero/hero';
import { FeaturedCollections } from './components/featured-collections/featured-collections';
import { Benefits } from './components/benefits/benefits';
import { InstagramFollow } from './components/instagram-follow/instagram-follow';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, WhatsappButton, Hero, FeaturedCollections, Benefits, InstagramFollow],
  templateUrl: './home.html',
  styleUrl: './home.scss'
})
export class Home {

}
