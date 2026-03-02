import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, ActivatedRoute, Router } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { Subscription } from 'rxjs';
import { blogPosts, BlogPost } from '../../../core/data/blog.data/blog.data';
import { products } from '../../../core/data/products.data/products.data';
import { Product } from '../../../shared/interfaces/product.interface';
import { WhatsappService } from '../../../shared/services/whatsapp.service';
import { PageHero } from '../../../shared/components/page-hero/page-hero';

@Component({
  selector: 'app-blog-detail',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHero],
  templateUrl: './blog-detail.html',
  styleUrl: './blog-detail.scss',
})
export class BlogDetail implements OnInit, OnDestroy {
  post: BlogPost | null = null;
  productosRelacionados: Product[] = [];
  otrosPosts: BlogPost[] = [];

  private routeSub!: Subscription;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private whatsapp: WhatsappService,
    private title: Title
  ) {}

  ngOnInit(): void {
    this.routeSub = this.route.paramMap.subscribe(params => {
      const slug = params.get('slug');
      this.cargarPost(slug);
    });
  }

  ngOnDestroy(): void {
    this.routeSub?.unsubscribe();
  }

  private cargarPost(slug: string | null): void {
    this.post = blogPosts.find(p => p.slug === slug) ?? null;

    if (!this.post) {
      this.router.navigate(['/blog']);
      return;
    }

    this.title.setTitle(`${this.post.titulo} - Vestizo`);

    this.productosRelacionados = products.filter(p =>
      this.post!.productos.includes(p.id) && p.disponible
    );

    this.otrosPosts = blogPosts
      .filter(p => p.slug !== slug)
      .slice(0, 3);
  }

  contactar(product: Product): void {
    this.whatsapp.openProduct(product);
  }

  getSlugPorProducto(productId: string): string {
    const post = blogPosts.find(p => p.productos.includes(productId));
    return post?.slug ?? '/blog';
  }
}