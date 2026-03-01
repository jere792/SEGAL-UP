import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { products } from '../../core/data/products.data/products.data';
import { Product } from '../../shared/interfaces/product.interface';
import { WhatsappService } from '../../shared/services/whatsapp.service';

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo {

  // ─── DATOS ───────────────────────────────────────────
  allProducts: Product[] = products;
  categorias: string[] = ['Todas', ...new Set(products.map(p => p.categoria))];

  // ─── SIGNALS ─────────────────────────────────────────
  categoriaActiva = signal<string>('Todas');
  busqueda = signal<string>('');

  productosFiltrados = computed(() => {
    const cat = this.categoriaActiva();
    const q = this.busqueda().toLowerCase().trim();
    return this.allProducts.filter(p => {
      const matchCat = cat === 'Todas' || p.categoria === cat;
      const matchQ = !q || p.nombre.toLowerCase().includes(q) || p.categoria.toLowerCase().includes(q);
      return matchCat && matchQ && p.disponible;
    });
  });

  // ─── NAVEGACIÓN DE IMÁGENES ──────────────────────────
  activeImageIndex: Record<string, number> = {};

  getImageIndex(id: string): number {
    return this.activeImageIndex[id] ?? 0;
  }

  nextImage(id: string, total: number, e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.activeImageIndex[id] = ((this.activeImageIndex[id] ?? 0) + 1) % total;
  }

  prevImage(id: string, total: number, e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    const current = this.activeImageIndex[id] ?? 0;
    this.activeImageIndex[id] = (current - 1 + total) % total;
  }

  setImage(id: string, index: number, e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.activeImageIndex[id] = index;
  }

  // ─── FILTROS ─────────────────────────────────────────
  setCategoria(cat: string): void {
    this.categoriaActiva.set(cat);
  }

  onBusqueda(e: Event): void {
    this.busqueda.set((e.target as HTMLInputElement).value);
  }

  // ─── WHATSAPP ────────────────────────────────────────
  constructor(private whatsapp: WhatsappService) {}

  contactar(product: Product): void {
    this.whatsapp.openProduct(product);
  }
}
