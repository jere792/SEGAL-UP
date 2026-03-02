import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

interface FooterLink {
  label: string;
  route: string;
}

interface SocialMedia {
  icon: string;
  label: string;
  url: string;
  colorClass: string;
}

interface PaymentMethod {
  name: string;
  image: string;
}

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './footer.html',
  styleUrl: './footer.scss',
})
export class Footer {
  currentYear: number = new Date().getFullYear();

  socialMedia: SocialMedia[] = [
    {
      icon: 'pi-facebook',
      label: 'Facebook',
      url: 'https://www.facebook.com/segalup',
      colorClass: 'facebook'
    },
    {
      icon: 'pi-instagram',
      label: 'Instagram',
      url: 'https://www.instagram.com/segalupmodaperu/',
      colorClass: 'instagram'
    },
    {
      icon: 'pi-tiktok',
      label: 'TikTok',
      url: 'https://www.tiktok.com/@segalupmoda.pe',
      colorClass: 'tiktok'
    }
  ];

  aboutLinks: FooterLink[] = [
    { label: 'Sobre Nosotros', route: '/about' },
    { label: 'Nuestras Tiendas', route: '/stores' },
    { label: 'Blog', route: '/blog' }
  ];

  supportLinks: FooterLink[] = [
    { label: 'Preguntas Frecuentes', route: '/faq' },
    { label: 'Política de Envío', route: '/shipping-policy' },
    { label: 'Política de Reembolso', route: '/refund-policy' }
  ];

  legalLinks: FooterLink[] = [
    { label: 'Privacidad', route: '/privacy' },
    { label: 'Términos y Condiciones', route: '/terms' }
  ];

  paymentMethods: PaymentMethod[] = [
    { name: 'Visa', image: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772417399/VISA_r90jgd.png' },
    { name: 'Yape', image: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772417403/YAPE_cg3bvi.png' },
    { name: 'Plin', image: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772417408/PLIN_slrldn.png' }
  ];
}
