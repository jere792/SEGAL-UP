import {
  Component,
  OnInit,
  OnDestroy,
  HostListener,
  PLATFORM_ID,
  Inject,
  ViewEncapsulation,
  Renderer2,
} from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';
import { CommonModule, isPlatformBrowser, DOCUMENT } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { products } from '../../core/data/products.data/products.data';
import { Product } from '../../shared/interfaces/product.interface';
import { WhatsappService } from '../../shared/services/whatsapp.service';
import { PageHero } from '../../shared/components/page-hero/page-hero';

// ... (interfaces y constantes igual que antes)
interface Filtros {
  soloDisponibles: boolean;
  precioMin: number;
  precioMax: number;
  categorias: string[];
  tonalidades: string[];
}

const PAGE_SIZE = 16;

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [CommonModule, FormsModule, PageHero],
  templateUrl: './catalogo.html',
  styleUrl: './catalogo.scss',
  encapsulation: ViewEncapsulation.None,
})
export class Catalogo implements OnInit, OnDestroy {
  allProducts: Product[] = products.filter((p) => p.disponible);
  productosFiltrados: Product[] = [];
  productosPagina: Product[] = [];

  categoriasUnicas: string[] = [];
  tonalidadesUnicas: string[] = [];

  precioMinGlobal = 0;
  precioMaxGlobal = 500;

  filtros: Filtros = {
    soloDisponibles: false,
    precioMin: 0,
    precioMax: 500,
    categorias: [],
    tonalidades: [],
  };

  openFilters: Record<string, boolean> = {
    disponibilidad: true,
    precio: true,
    categoria: true,
    tonalidad: true,
  };

  sortBy = '';
  viewMode: 'grid4' | 'grid3' | 'list' = 'grid4';

  currentPage = 1;
  pageSize = PAGE_SIZE;

  get totalPages(): number {
    return Math.ceil(this.productosFiltrados.length / this.pageSize);
  }

  get pages(): number[] {
    const total = this.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
    const pages: number[] = [];
    const delta = 2;
    const left = this.currentPage - delta;
    const right = this.currentPage + delta;
    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= left && i <= right)) pages.push(i);
    }
    const withEllipsis: number[] = [];
    let prev = 0;
    for (const p of pages) {
      if (prev && p - prev > 1) withEllipsis.push(-1);
      withEllipsis.push(p);
      prev = p;
    }
    return withEllipsis;
  }

  lightboxProduct: Product | null = null;
  lightboxIndex = 0;
  private lightboxEl: HTMLElement | null = null;

  get lightboxOpen(): boolean {
    return this.lightboxProduct !== null;
  }

  private activeImageIndex: Record<string, number> = {};

  constructor(
    private whatsapp: WhatsappService,
    private title: Title,
    private meta: Meta,
    private renderer: Renderer2,
    @Inject(PLATFORM_ID) private platformId: object,
    @Inject(DOCUMENT) private document: Document,
  ) {}

  ngOnInit(): void {
    const precios = this.allProducts.map((p) => p.precio ?? 0);
    this.precioMinGlobal = Math.min(...precios);
    this.precioMaxGlobal = Math.max(...precios);
    this.filtros.precioMin = this.precioMinGlobal;
    this.filtros.precioMax = this.precioMaxGlobal;
    this.categoriasUnicas = [...new Set(this.allProducts.map((p) => p.categoria))];
    this.tonalidadesUnicas = [...new Set(this.allProducts.flatMap((p) => p.tonalidades))].sort();
    this.aplicarFiltros();
    if (isPlatformBrowser(this.platformId)) this.precargarImagenes();

    // SEO
    this.title.setTitle('Catálogo de Enterizos y Vestidos 2026 | Vestizo - Gamarra Lima');
    this.meta.updateTag({
      name: 'description',
      content:
        'Explora nuestro catálogo completo de enterizos y vestidos exclusivos 2026. Colecciones Sofía, Veronica, Aylen y más. Envíos a todo el Perú desde Gamarra, Lima.',
    });
    this.meta.updateTag({
      name: 'keywords',
      content:
        'catálogo enterizos Lima, vestidos exclusivos Gamarra, ropa mujer 2026, enterizos colección, moda femenina Perú',
    });
    this.meta.updateTag({
      property: 'og:title',
      content: 'Catálogo 2026 | Vestizo - Enterizos y Vestidos Exclusivos',
    });
    this.meta.updateTag({
      property: 'og:description',
      content:
        'Explora nuestro catálogo completo. Más de 20 modelos exclusivos con envíos a todo el Perú.',
    });
    this.meta.updateTag({ property: 'og:url', content: 'https://vestizo.vercel.app/catalogo' });
    this.meta.updateTag({ name: 'robots', content: 'index, follow' });
  }

  // ... todo el resto del archivo igual que antes (métodos, lightbox, filtros, etc.)
  ngOnDestroy(): void {
    this.destroyLightbox();
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = '';
    }
  }

  private precargarImagenes(): void {
    this.allProducts.forEach((p) =>
      p.imagenes.forEach((url) => {
        const img = new Image();
        img.src = url;
      }),
    );
  }

  openLightbox(product: Product, e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.lightboxProduct = product;
    this.lightboxIndex = this.activeImageIndex[product.id] ?? 0;
    if (!isPlatformBrowser(this.platformId)) return;
    this.document.body.style.overflow = 'hidden';
    this.createLightboxEl(product);
  }

  closeLightbox(): void {
    this.lightboxProduct = null;
    this.lightboxIndex = 0;
    if (isPlatformBrowser(this.platformId)) {
      this.document.body.style.overflow = '';
    }
    this.destroyLightbox();
  }

  lightboxNext(): void {
    if (!this.lightboxProduct) return;
    this.lightboxIndex = (this.lightboxIndex + 1) % this.lightboxProduct.imagenes.length;
    this.updateLightboxSlide();
  }

  lightboxPrev(): void {
    if (!this.lightboxProduct) return;
    const total = this.lightboxProduct.imagenes.length;
    this.lightboxIndex = (this.lightboxIndex - 1 + total) % total;
    this.updateLightboxSlide();
  }

  lightboxGoTo(index: number): void {
    this.lightboxIndex = index;
    this.updateLightboxSlide();
  }

  private createLightboxEl(product: Product): void {
    this.destroyLightbox();
    const total = product.imagenes.length;
    const idx = this.lightboxIndex;
    const thumbsHtml =
      total > 1
        ? `
      <div class="lightbox__thumbs" id="lb-thumbs">
        ${product.imagenes
          .map(
            (img, i) => `
          <button class="lightbox__thumb${i === idx ? ' lightbox__thumb--active' : ''}" data-goto="${i}">
            <img src="${img}" alt="${product.nombre} ${i + 1}" />
          </button>`,
          )
          .join('')}
      </div>`
        : '';
    const arrowsHtml =
      total > 1
        ? `
      <button class="lightbox__arrow lightbox__arrow--prev" id="lb-prev"><i class="pi pi-chevron-left"></i></button>
      <button class="lightbox__arrow lightbox__arrow--next" id="lb-next"><i class="pi pi-chevron-right"></i></button>`
        : '';
    const counterHtml =
      total > 1
        ? `<span class="lightbox__counter" id="lb-counter">${idx + 1} / ${total}</span>`
        : '';
    const precioHtml = product.precio
      ? `<span class="lightbox__precio">S/ ${product.precio.toFixed(2)}</span>`
      : '';
    const el = this.document.createElement('div');
    el.className = 'lightbox';
    el.style.cssText = 'animation:none!important;';
    el.innerHTML = `
      <div class="lightbox__content" style="animation:lb-scale .22s cubic-bezier(.22,1,.36,1) both">
        <button class="lightbox__close" id="lb-close"><i class="pi pi-times"></i></button>
        <div class="lightbox__stage">
          ${arrowsHtml}
          <div class="lightbox__img-wrap">
            <img id="lb-img" src="${product.imagenes[idx]}" alt="${product.nombre}" />
          </div>
        </div>
        ${thumbsHtml}
        <div class="lightbox__footer">
          <div class="lightbox__info">
            <span class="lightbox__nombre">${product.nombre}</span>
            <span class="lightbox__categoria">${product.categoria}</span>
            ${counterHtml}
          </div>
          <div class="lightbox__actions">
            ${precioHtml}
            <button class="lightbox__wsp" id="lb-wsp">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" style="width:18px;height:18px;flex-shrink:0"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/></svg>
              Consultar por WhatsApp
            </button>
          </div>
        </div>
      </div>`;
    el.addEventListener('click', (ev) => {
      if (ev.target === el) this.closeLightbox();
    });
    el.querySelector('#lb-close')!.addEventListener('click', () => this.closeLightbox());
    el.querySelector('#lb-wsp')!.addEventListener('click', (ev) => {
      ev.stopPropagation();
      if (this.lightboxProduct) this.whatsapp.openProduct(this.lightboxProduct);
    });
    el.querySelector('#lb-prev')?.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this.lightboxPrev();
    });
    el.querySelector('#lb-next')?.addEventListener('click', (ev) => {
      ev.stopPropagation();
      this.lightboxNext();
    });
    el.querySelectorAll('[data-goto]').forEach((btn) => {
      btn.addEventListener('click', (ev) => {
        ev.stopPropagation();
        this.lightboxGoTo(parseInt((btn as HTMLElement).dataset['goto']!, 10));
      });
    });
    this.document.body.appendChild(el);
    this.lightboxEl = el;
  }

  private updateLightboxSlide(): void {
    const el = this.lightboxEl;
    const p = this.lightboxProduct;
    if (!el || !p) return;
    const idx = this.lightboxIndex;
    const img = el.querySelector<HTMLImageElement>('#lb-img');
    if (img) img.src = p.imagenes[idx];
    el.querySelectorAll<HTMLElement>('[data-goto]').forEach((btn, i) => {
      btn.classList.toggle('lightbox__thumb--active', i === idx);
    });
    const counter = el.querySelector('#lb-counter');
    if (counter) counter.textContent = `${idx + 1} / ${p.imagenes.length}`;
  }

  private destroyLightbox(): void {
    this.lightboxEl?.remove();
    this.lightboxEl = null;
  }

  @HostListener('document:keydown', ['$event'])
  onKeydown(e: KeyboardEvent): void {
    if (!this.lightboxOpen) return;
    if (e.key === 'Escape') this.closeLightbox();
    if (e.key === 'ArrowRight') this.lightboxNext();
    if (e.key === 'ArrowLeft') this.lightboxPrev();
  }

  toggleFilter(key: string): void {
    this.openFilters[key] = !this.openFilters[key];
  }

  toggleCategoria(cat: string): void {
    const idx = this.filtros.categorias.indexOf(cat);
    if (idx > -1) this.filtros.categorias.splice(idx, 1);
    else this.filtros.categorias.push(cat);
    this.aplicarFiltros();
  }

  toggleTonalidad(ton: string): void {
    const idx = this.filtros.tonalidades.indexOf(ton);
    if (idx > -1) this.filtros.tonalidades.splice(idx, 1);
    else this.filtros.tonalidades.push(ton);
    this.aplicarFiltros();
  }

  aplicarFiltros(): void {
    let result = [...this.allProducts];
    if (this.filtros.soloDisponibles) result = result.filter((p) => p.disponible);
    result = result.filter((p) => {
      const precio = p.precio ?? 0;
      return precio >= this.filtros.precioMin && precio <= this.filtros.precioMax;
    });
    if (this.filtros.categorias.length > 0)
      result = result.filter((p) => this.filtros.categorias.includes(p.categoria));
    if (this.filtros.tonalidades.length > 0)
      result = result.filter((p) =>
        p.tonalidades.some((t) => this.filtros.tonalidades.includes(t)),
      );
    switch (this.sortBy) {
      case 'nombre_asc':
        result.sort((a, b) => a.nombre.localeCompare(b.nombre));
        break;
      case 'nombre_desc':
        result.sort((a, b) => b.nombre.localeCompare(a.nombre));
        break;
      case 'precio_asc':
        result.sort((a, b) => (a.precio ?? 0) - (b.precio ?? 0));
        break;
      case 'precio_desc':
        result.sort((a, b) => (b.precio ?? 0) - (a.precio ?? 0));
        break;
      case 'fecha_desc':
        result.sort(
          (a, b) => new Date(b.fechaCreacion).getTime() - new Date(a.fechaCreacion).getTime(),
        );
        break;
      case 'fecha_asc':
        result.sort(
          (a, b) => new Date(a.fechaCreacion).getTime() - new Date(b.fechaCreacion).getTime(),
        );
        break;
    }
    this.productosFiltrados = result;
    this.currentPage = 1;
    this.actualizarPagina();
  }

  private actualizarPagina(): void {
    const start = (this.currentPage - 1) * this.pageSize;
    this.productosPagina = this.productosFiltrados.slice(start, start + this.pageSize);
  }

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    this.actualizarPagina();
    if (isPlatformBrowser(this.platformId)) {
      this.document
        .querySelector('.catalogo-main')
        ?.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }

  limpiarFiltros(): void {
    this.filtros = {
      soloDisponibles: false,
      precioMin: this.precioMinGlobal,
      precioMax: this.precioMaxGlobal,
      categorias: [],
      tonalidades: [],
    };
    this.sortBy = '';
    this.aplicarFiltros();
  }

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
    const c = this.activeImageIndex[id] ?? 0;
    this.activeImageIndex[id] = (c - 1 + total) % total;
  }

  setImage(id: string, index: number, e: Event): void {
    e.preventDefault();
    e.stopPropagation();
    this.activeImageIndex[id] = index;
  }

  contactar(product: Product): void {
    this.whatsapp.openProduct(product);
  }

  isNew(product: Product): boolean {
    const limite = new Date();
    limite.setDate(limite.getDate() - 15);
    return new Date(product.fechaCreacion) >= limite;
  }

  formatFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-PE', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
    });
  }
}
