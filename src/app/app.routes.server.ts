import { RenderMode, ServerRoute } from '@angular/ssr';
import { blogPosts } from './core/data/blog.data/blog.data';

export const serverRoutes: ServerRoute[] = [
  {
    path: 'blog/:slug',
    renderMode: RenderMode.Prerender,
    async getPrerenderParams() {
      return blogPosts.map(post => ({ slug: post.slug }));
    }
  },
  {
    path: '**',
    renderMode: RenderMode.Server
  }
];