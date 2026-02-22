import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { Product } from '../../../../shared/interfaces/product.interface';
import { products } from '../../../../core/data/products.data/products.data';
import { ProductCardComponent } from '../../../../shared/components/product-card/product-card';

@Component({
  selector: 'app-featured-collections',
  standalone: true,
  imports: [CommonModule, RouterModule, ProductCardComponent],
  templateUrl: './featured-collections.html',
  styleUrl: './featured-collections.scss',
})
export class FeaturedCollections implements OnInit {
  featuredProducts: Product[] = [];

  ngOnInit(): void {
    const allProducts = [...products];
    this.featuredProducts = allProducts
      .sort((a, b) => b.fechaCreacion.getTime() - a.fechaCreacion.getTime())
      .slice(0, 4);
  }
}
