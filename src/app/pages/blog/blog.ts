import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { blogPosts, BlogPost } from '../../core/data/blog.data/blog.data';

const PAGE_SIZE = 10;

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHero],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Blog - Vestizo');
  }

  posts: BlogPost[] = blogPosts.sort(
    (a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime(),
  );

  viewMode: 'grid' | 'feed' = 'feed';

  // ─── Paginación ───────────────────────────────────────
  currentPage = 1;
  pageSize = PAGE_SIZE;

  get totalPages(): number {
    return Math.ceil(this.posts.length / this.pageSize);
  }

  get postsPagina(): BlogPost[] {
    const start = (this.currentPage - 1) * this.pageSize;
    return this.posts.slice(start, start + this.pageSize);
  }

  get pages(): number[] {
    const total = this.totalPages;
    if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);

    const pages: number[] = [];
    const delta = 2;
    const left  = this.currentPage - delta;
    const right = this.currentPage + delta;

    for (let i = 1; i <= total; i++) {
      if (i === 1 || i === total || (i >= left && i <= right)) {
        pages.push(i);
      }
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

  goToPage(page: number): void {
    if (page < 1 || page > this.totalPages || page === this.currentPage) return;
    this.currentPage = page;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  getAniosUnicos(): number[] {
    return [...new Set(this.postsPagina.map((p) => p.anio))].sort((a, b) => b - a);
  }

  getPostsPorAnio(anio: number): BlogPost[] {
    return this.postsPagina.filter((p) => p.anio === anio);
  }

  formatFecha(fecha: Date): string {
    return new Date(fecha).toLocaleDateString('es-PE', {
      day:   '2-digit',
      month: 'long',
      year:  'numeric',
    });
  }

  isReciente(fecha: Date): boolean {
    const limite = new Date();
    limite.setDate(limite.getDate() - 15);
    return new Date(fecha) >= limite;
  }
}