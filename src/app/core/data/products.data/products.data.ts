import { Product } from '../../../shared/interfaces/product.interface';

export const products: Product[] = [

  // ─── COLECCIÓN MARGARITA ────────────────────────────
  {
    id: '1',
    nombre: 'Vestido Margarita',
    descripcion: 'Diseño exclusivo de la colección Margarita Madrid.',
    imagenes: [
      'assets/home/featured-collections/MARGARITA_1_MADRID.jpeg',
      'assets/home/featured-collections/MARGARITA_2_MADRID.jpeg',
      'assets/home/featured-collections/MARGARITA_3_MADRID.jpeg',
      'assets/home/featured-collections/MARGARITA_4_MADRID.jpeg',
    ],
    categoria: 'Colección Margarita',
    precio: 75,
    fechaCreacion: new Date('2026-02-22'),
    disponible: true,
    destacado: true
  },

  // ─── COLECCIÓN RAISA ────────────────────────────────
  {
    id: '2',
    nombre: 'Vestido Raisa',
    descripcion: 'Diseño exclusivo de la colección Raisa Madrid.',
    imagenes: [
      'assets/home/featured-collections/RAISA_1_MADRID.jpeg',
      'assets/home/featured-collections/RAISA_2_MADRID.jpeg',
      'assets/home/featured-collections/RAISA_3_MADRID.jpeg',
      'assets/home/featured-collections/RAISA_4_MADRID.jpeg',
      'assets/home/featured-collections/RAISA_5_MADRID.jpeg',
      'assets/home/featured-collections/RAISA_6_MADRID.jpeg',
    ],
    categoria: 'Colección Raisa',
    precio: 75,
    fechaCreacion: new Date('2026-02-21'),
    disponible: true,
    destacado: true
  },

  // ─── COLECCIÓN TANIA ────────────────────────────────
  {
    id: '3',
    nombre: 'Conjunto Tania Lino',
    descripcion: 'Diseño exclusivo de la colección Tania Viena Lino.',
    imagenes: [
      'assets/home/featured-collections/TANIA_1_VIENA_LINO.jpeg',
      'assets/home/featured-collections/TANIA_2_VIENA_LINO.jpeg',
      'assets/home/featured-collections/TANIA_3_VIENA_LINO.jpeg',
      'assets/home/featured-collections/TANIA_4_VIENA_LINO.jpeg',
    ],
    categoria: 'Colección Tania',
    precio: 75,
    fechaCreacion: new Date('2026-02-20'),
    disponible: true,
    destacado: true
  },

  // ─── COLECCIÓN URSULA ───────────────────────────────
  {
    id: '4',
    nombre: 'Vestido Ursula',
    descripcion: 'Diseño exclusivo de la colección Ursula Madrid.',
    imagenes: [
      'assets/home/featured-collections/URSULA_1_MADRID.jpeg',
      'assets/home/featured-collections/URSULA_2_MADRID.jpeg',
      'assets/home/featured-collections/URSULA_3_MADRID.jpeg',
      'assets/home/featured-collections/URSULA_4_MADRID.jpeg',
      'assets/home/featured-collections/URSULA_5_MADRID.jpeg',
      'assets/home/featured-collections/URSULA_6_MADRID.jpeg',
    ],
    categoria: 'Colección Ursula',
    precio: 75,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true
  }

];
