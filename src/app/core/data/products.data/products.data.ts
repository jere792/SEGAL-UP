import { Product } from '../../../shared/interfaces/product.interface';

export const products: Product[] = [
  {
    id: '1',
    nombre: 'Vestido Margarita',
    descripcion: 'Diseño exclusivo de la colección Margarita Madrid.',
    imagenes: ['assets/home/featured-collections/MARGARITA_2_MADRID.jpeg'],
    categoria: 'Colección Margarita',
    precio: 75,
    fechaCreacion: new Date('2026-02-22'),
    disponible: true,
    destacado: true
  },
  {
    id: '2',
    nombre: 'Vestido Raisa',
    descripcion: 'Diseño exclusivo de la colección Raisa Madrid.',
    imagenes: ['assets/home/featured-collections/RAISA_1_MADRID.jpeg'],
    categoria: 'Colección Raisa',
    precio: 75,
    fechaCreacion: new Date('2026-02-21'),
    disponible: true,
    destacado: true
  },
  {
    id: '3',
    nombre: 'Conjunto Tania Lino',
    descripcion: 'Diseño exclusivo de la colección Tania Viena Lino.',
    imagenes: ['assets/home/featured-collections/TANIA_1_VIENA_LINO.jpeg'],
    categoria: 'Colección Tania',
    precio: 75,
    fechaCreacion: new Date('2026-02-20'),
    disponible: true,
    destacado: true
  },
  {
    id: '4',
    nombre: 'Vestido Ursula',
    descripcion: 'Diseño exclusivo de la colección Ursula Madrid.',
    imagenes: ['assets/home/featured-collections/URSULA_1_MADRID.jpeg'],
    categoria: 'Colección Ursula',
    precio: 75,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true
  }
];
