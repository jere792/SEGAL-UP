import { Component, OnInit, PLATFORM_ID, Inject } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { products } from '../../core/data/products.data/products.data';
import { Product } from '../../shared/interfaces/product.interface';
import { WhatsappService } from '../../shared/services/whatsapp.service';
import { PageHero } from '../../shared/components/page-hero/page-hero';

interface Filtros {
  soloDisponibles: boolean;
  precioMin: number;
  precioMax: number;
  categorias: string[];
}

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHero],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
})
export class Catalogo implements OnInit {

  allProducts: Product[] = products.filter(p => p.disponible);
  productosFiltrados: Product[] = [];
  categoriasUnicas: string[] = [];

  precioMinGlobal = 0;
  precioMaxGlobal = 500;

  filtros: Filtros = {
    soloDisponibles: false,
    precioMin: 0,
    precioMax: 500,
    categorias: []
  };

  openFilters: Record<string, boolean> = {
    disponibilidad: true,
    precio: true,
    categoria: true
  };

  sortBy = '';
  viewMode: 'grid4' | 'grid3' | 'list' = 'grid4';

  private activeImageIndex: Record<string, number> = {};

  constructor(
    private whatsapp: WhatsappService,
    @Inject(PLATFORM_ID) private platformId: object
  ) {}

  ngOnInit(): void {
    const precios = this.allProducts.map(p => p.precio ?? 0);
    this.precioMinGlobal = Math.min(...precios);
    this.precioMaxGlobal = Math.max(...precios);
    this.filtros.precioMin = this.precioMinGlobal;
    this.filtros.precioMax = this.precioMaxGlobal;
    this.categoriasUnicas = [...new Set(this.allProducts.map(p => p.categoria))];
    this.aplicarFiltros();

    // Precargar todas las imágenes de todos los productos
    if (isPlatformBrowser(this.platformId)) {
      this.precargarImagenes();
    }
  }

  private precargarImagenes(): void {
    this.allProducts.forEach(product => {
      product.imagenes.forEach(url => {
        const img = new Image();
        img.src = url;
      });
    });
  }

  toggleFilter(key: string): void {
    this.openFilters[key] = !this.openFilters[key];
  }

  toggleCategoria(cat: string): void {
    const idx = this.filtros.categorias.indexOf(cat);
    if (idx > -1) {
      this.filtros.categorias.splice(idx, 1);
    } else {
      this.filtros.categorias.push(cat);
    }
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let result = [...this.allProducts];

    if (this.filtros.soloDisponibles) {
      result = result.filter(p => p.disponible);
    }

    result = result.filter(p => {
      const precio = p.precio ?? 0;
      return precio >= this.filtros.precioMin && precio <= this.filtros.precioMax;
    });

    if (this.filtros.categorias.length > 0) {
      result = result.filter(p => this.filtros.categorias.includes(p.categoria));
    }

    switch (this.sortBy) {
      case 'nombre_asc':  result.sort((a, b) => a.nombre.localeCompare(b.nombre)); break;
      case 'nombre_desc': result.sort((a, b) => b.nombre.localeCompare(a.nombre)); break;
      case 'precio_asc':  result.sort((a, b) => (a.precio ?? 0) - (b.precio ?? 0)); break;
      case 'precio_desc': result.sort((a, b) => (b.precio ?? 0) - (a.precio ?? 0)); break;
      case 'fecha_desc':  result.sort((a, b) => new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime()); break;
      case 'fecha_asc':   result.sort((a, b) => new Date(a.fechaCreacion).getTime() - new Date(b.fechaCreacion).getTime()); break;
    }

    this.productosFiltrados = result;
  }

  limpiarFiltros(): void {
    this.filtros = {
      soloDisponibles: false,
      precioMin: this.precioMinGlobal,
      precioMax: this.precioMaxGlobal,
      categorias: []
    };
    this.sortBy = '';
    this.aplicarFiltros();
  }

  getImageIndex(id: string): number {
    return this.activeImageIndex[id] ?? 0;
  }

  nextImage(id: string, total: number, e: Event): void {
    e.preventDefault(); e.stopPropagation();
    this.activeImageIndex[id] = ((this.activeImageIndex[id] ?? 0) + 1) % total;
  }

  prevImage(id: string, total: number, e: Event): void {
    e.preventDefault(); e.stopPropagation();
    const c = this.activeImageIndex[id] ?? 0;
    this.activeImageIndex[id] = (c - 1 + total) % total;
  }

  setImage(id: string, index: number, e: Event): void {
    e.preventDefault(); e.stopPropagation();
    this.activeImageIndex[id] = index;
  }

  contactar(product: Product): void {
    this.whatsapp.openProduct(product);
  }
}