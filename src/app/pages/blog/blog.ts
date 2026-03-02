import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PageHero } from '../../shared/components/page-hero/page-hero';
import { blogPosts, BlogPost } from '../../core/data/blog.data/blog.data';

@Component({
  selector: 'app-blog',
  standalone: true,
  imports: [CommonModule, RouterLink, PageHero],
  templateUrl: './blog.html',
  styleUrl: './blog.scss',
})
export class Blog {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Blog - Vestizo');
  }

  posts: BlogPost[] = blogPosts.sort(
    (a, b) => new Date(b.fechaPublicacion).getTime() - new Date(a.fechaPublicacion).getTime(),
  );

  viewMode: 'grid' | 'feed' = 'feed';

  getAniosUnicos(): number[] {
    return [...new Set(this.posts.map((p) => p.anio))].sort((a, b) => b - a);
  }

  getPostsPorAnio(anio: number): BlogPost[] {
    return this.posts.filter((p) => p.anio === anio);
  }
}
