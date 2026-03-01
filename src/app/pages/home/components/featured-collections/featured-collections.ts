import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../shared/interfaces/product.interface';
import { products } from '../../../../core/data/products.data/products.data';
import { WhatsappService } from '../../../../shared/services/whatsapp.service';


@Component({
  selector: 'app-featured-collections',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './featured-collections.html',
  styleUrl: './featured-collections.scss',
})
export class FeaturedCollections {
  products: Product[] = products
    .filter((p) => p.disponible)
    .sort((a, b) => new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime())
    .slice(0, 8);

  constructor(private whatsapp: WhatsappService) {}

  contactar(product: Product): void {
    this.whatsapp.openProduct(product);
  }
}
