export interface BlogPost {
  id: string;
  slug: string;
  titulo: string;
  temporada: string;
  anio: number;
  descripcion: string;
  imagen: string;
  coleccion: string;
  contenido: string;
  productos: string[];
  fechaPublicacion: Date;
}

export const blogPosts: BlogPost[] = [
  {
    id: 'coleccion-margarita-2026',
    slug: 'coleccion-margarita-2026',
    titulo: 'Colección Margarita',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Diseños frescos y elegantes inspirados en la feminidad moderna. La colección Margarita llega con tonos vibrantes para esta temporada.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405842/MARGARITA_1_MADRID-AZUL_srlnze.jpg',
    coleccion: 'Colección Margarita',
    contenido: 'La colección Margarita nació de la inspiración en la mujer moderna que busca prendas versátiles sin sacrificar elegancia. Cada pieza fue diseñada pensando en la comodidad del día a día combinada con un estilo sofisticado. Los tonos azules de esta temporada evocan frescura y confianza, ideales para cualquier ocasión.',
    productos: ['margarita-azul'],
    fechaPublicacion: new Date('2026-02-22'),
  },
  {
    id: 'coleccion-raisa-2026',
    slug: 'coleccion-raisa-2026',
    titulo: 'Colección Raisa',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Elegancia y color en cada prenda. La colección Raisa combina tonos vibrantes con cortes exclusivos para la mujer que marca tendencia.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405820/RAISA_1_MADRID-ROSA_rtk5ur.jpg',
    coleccion: 'Colección Raisa',
    contenido: 'Raisa es una colección que celebra la diversidad del color. Disponible en rosa y verde, cada tonalidad cuenta su propia historia. Las telas seleccionadas para esta colección garantizan comodidad durante todo el día, mientras que los cortes exclusivos resaltan la figura femenina de manera natural y elegante.',
    productos: ['raisa-rosa', 'raisa-verde'],
    fechaPublicacion: new Date('2026-02-21'),
  },
  {
    id: 'coleccion-tania-2026',
    slug: 'coleccion-tania-2026',
    titulo: 'Colección Tania Lino',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'La frescura del lino en diseños exclusivos. Tania Viena Lino es la apuesta de Vestizo por la moda sostenible sin perder el estilo.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405834/TANIA_1_VIENA_LINO-VERDE_yybfsw.jpg',
    coleccion: 'Colección Tania',
    contenido: 'La colección Tania Lino es nuestra apuesta por materiales naturales que respetan el planeta sin comprometer el estilo. El lino, conocido por su frescura y durabilidad, es el protagonista de esta línea. Los tonos verdes elegidos para esta temporada conectan con la naturaleza y aportan un aire de serenidad y sofisticación a quien la viste.',
    productos: ['tania-verde'],
    fechaPublicacion: new Date('2026-02-20'),
  },
  {
    id: 'coleccion-ursula-2026',
    slug: 'coleccion-ursula-2026',
    titulo: 'Colección Ursula',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Clásico y atemporal. La colección Ursula Madrid combina el negro y el azul en diseños que nunca pasan de moda.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/q_auto,f_auto/v1772405814/URSULA_1_MADRID-AZUL_tvhkhp.jpg',
    coleccion: 'Colección Ursula',
    contenido: 'Ursula Madrid es la colección para la mujer que valora lo atemporal. Diseñada en los clásicos azul y negro, cada prenda es una inversión en estilo que trasciende las tendencias. La confección meticulosa y los materiales de alta calidad hacen de esta colección una de las más solicitadas de la temporada.',
    productos: ['ursula-azul', 'ursula-negro'],
    fechaPublicacion: new Date('2026-02-19'),
  },
];