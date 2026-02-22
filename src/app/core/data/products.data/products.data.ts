import { Product } from '../../../shared/interfaces';

export const products: Product[] = [
  {
    id: '1',
    nombre: 'Vestido largo nude',
    descripcion: 'Vestido elegante en tono nude, ideal para eventos de noche.',
    imagenes: ['assets/logo/LOGO.jpg'],
    categoria: 'Vestidos largos',
    fechaCreacion: new Date('2025-12-10'),
    disponible: true,
    destacado: true
  },
  {
    id: '2',
    nombre: 'Vestido corto dorado',
    descripcion: 'Vestido corto con detalles dorados.',
    imagenes: ['assets/logo/LOGO.jpg'],
    categoria: 'Vestidos cortos',
    fechaCreacion: new Date('2025-12-05'),
    disponible: true
  }
];
