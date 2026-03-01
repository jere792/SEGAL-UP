import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Testimonial {
  name: string;
  location: string;
  avatar: string;
  rating: number;
  text: string;
  product?: string;
}

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.html',
  styleUrl: './testimonials.scss'
})
export class Testimonials {
  testimonials: Testimonial[] = [
    {
      name: 'Valeria M.',
      location: 'Lima',
      avatar: 'assets/testimonials/avatar-1.jpg',
      rating: 5,
      text: 'La calidad de las prendas es increíble. Me asesoraron por WhatsApp y llegó perfecto a mi casa.',
      product: 'Vestido Madrid'
    },
    {
      name: 'Daniela R.',
      location: 'Arequipa',
      avatar: 'assets/testimonials/avatar-2.jpg',
      rating: 5,
      text: 'Súper fácil comprar, en minutos me respondieron y el envío fue rapidísimo. 100% recomendado.',
      product: 'Conjunto Viena'
    },
    {
      name: 'Camila T.',
      location: 'Trujillo',
      avatar: 'assets/testimonials/avatar-3.jpg',
      rating: 5,
      text: 'Hermosas telas y diseños únicos. La atención personalizada hace toda la diferencia.',
      product: 'Blusa Raisa'
    }
  ];

  getStars(rating: number): number[] {
    return Array(rating).fill(0);
  }
}
