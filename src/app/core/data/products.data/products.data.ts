import { Product } from '../../../shared/interfaces/product.interface';

export const products: Product[] = [

  // ─── COLECCIÓN MARGARITA ────────────────────────────
  {
    id: 'margarita-azul',
    nombre: 'Enterizo Margarita',
    descripcion: 'Diseño exclusivo de la colección Margarita Madrid.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405842/MARGARITA_1_MADRID-AZUL_srlnze.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405845/MARGARITA_2_MADRID-AZUL_nhgvj2.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405844/MARGARITA_3_MADRID-AZUL_scrzqr.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405847/MARGARITA_4_MADRID-AZUL_khf9pa.jpg',
    ],
    categoria: 'Colección Margarita',
    precio: 75,
    fechaCreacion: new Date('2026-02-22'),
    disponible: true,
    destacado: true,
    tonalidades: ['azul'],
  },
  // Cuando tengas más tonalidades de Margarita, agregar aquí:
  // { id: 'margarita-rosa', tonalidades: ['rosa'], imagenes: [...] }

  // ─── COLECCIÓN RAISA ────────────────────────────────
  {
    id: 'raisa-rosa',
    nombre: 'Enterizo Raisa',
    descripcion: 'Diseño exclusivo de la colección Raisa Madrid.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405820/RAISA_1_MADRID-ROSA_rtk5ur.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405824/RAISA_2_MADRID-ROSA_p4wcyh.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405827/RAISA_3_MADRID-ROSA_aegzj1.jpg',
    ],
    categoria: 'Colección Raisa',
    precio: 75,
    fechaCreacion: new Date('2026-02-21'),
    disponible: true,
    destacado: true,
    tonalidades: ['rosa'],
  },
  {
    id: 'raisa-verde',
    nombre: 'Enterizo Raisa',
    descripcion: 'Diseño exclusivo de la colección Raisa Madrid.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405829/RAISA_1_MADRID_fac4yo.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405831/RAISA_2_MADRID_n6wgoe.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405833/RAISA_3_MADRID_x4jtle.jpg',
    ],
    categoria: 'Colección Raisa',
    precio: 75,
    fechaCreacion: new Date('2026-02-21'),
    disponible: true,
    destacado: true,
    tonalidades: ['verde'],
  },
  // Cuando tengas más tonalidades de Raisa, agregar aquí:
  // { id: 'raisa-negro', tonalidades: ['negro'], imagenes: [...] }

  // ─── COLECCIÓN TANIA ────────────────────────────────
  {
    id: 'tania-verde',
    nombre: 'Enterizo Tania Lino',
    descripcion: 'Diseño exclusivo de la colección Tania Viena Lino.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405834/TANIA_1_VIENA_LINO-VERDE_yybfsw.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405837/TANIA_2_VIENA_LINO-VERDE_pfvxvu.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405838/TANIA_3_VIENA_LINO-VERDE_dyvflq.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405840/TANIA_4_VIENA_LINO-VERDE_atrmdh.jpg',
    ],
    categoria: 'Colección Tania',
    precio: 75,
    fechaCreacion: new Date('2026-02-20'),
    disponible: true,
    destacado: true,
    tonalidades: ['verde'],
  },
  // Cuando tengas más tonalidades de Tania, agregar aquí:
  // { id: 'tania-beige', tonalidades: ['beige'], imagenes: [...] }

  // ─── COLECCIÓN URSULA ───────────────────────────────
  {
    id: 'ursula-azul',
    nombre: 'Enterizo Ursula',
    descripcion: 'Diseño exclusivo de la colección Ursula Madrid.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405814/URSULA_1_MADRID-AZUL_tvhkhp.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405815/URSULA_2_MADRID-AZUL_scwhz4.jpg',
    ],
    categoria: 'Colección Ursula',
    precio: 75,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['azul'],
  },
  {
    id: 'ursula-negro',
    nombre: 'Enterizo Ursula',
    descripcion: 'Diseño exclusivo de la colección Ursula Madrid.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405817/URSULA_1_MADRID-NEGRO_luxldt.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405822/URSULA_2_MADRID-NEGRO_mx4pbk.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772405826/URSULA_4_MADRID-NEGRO_wmyihz.jpg',
    ],
    categoria: 'Colección Ursula',
    precio: 75,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['negro'],
  },

];