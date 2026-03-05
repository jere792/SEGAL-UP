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
  // ─── COLECCIÓN SOFÍA ────────────────────────────────
  {
    id: 'coleccion-sofia-2026',
    slug: 'coleccion-sofia-2026',
    titulo: 'Colección Sofía',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Elegancia natural en cada detalle. La colección Sofía llega con vestidos en tonos verdes y mostaza para la mujer que irradia confianza.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772584704/VESTIDO_2_SOFIA-VERDE_hl08ct.jpg',
    coleccion: 'Colección Sofía',
    contenido: 'La colección Sofía nació de la inspiración en la feminidad natural y auténtica. Cada vestido fue pensado para acompañar a la mujer moderna en sus momentos más especiales, combinando cortes favorecedores con paletas de color que evocan la calidez y la serenidad. Disponible en verde y mostaza, dos tonos que definen esta temporada.',
    productos: ['sofia-verde', 'sofia-marron'],
    fechaPublicacion: new Date('2026-03-03'),
  },

  // ─── COLECCIÓN VERONICA ─────────────────────────────
  {
    id: 'coleccion-veronica-2026',
    slug: 'coleccion-veronica-2026',
    titulo: 'Colección Veronica',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Tres tonalidades, una sola actitud. La colección Veronica llega en azulino, botella y vino para la mujer que sabe lo que quiere.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670503/VERONICA_1_AZULINO_tftpx9.jpg',
    coleccion: 'Colección Veronica',
    contenido: 'Veronica es una colección que habla el idioma de la versatilidad. Disponible en tres tonalidades — azulino, botella y vino — cada variante tiene su propia personalidad sin perder la esencia del diseño. Los cortes estructurados y las telas de alta calidad hacen de cada prenda una elección segura para cualquier ocasión, desde una reunión de trabajo hasta una salida especial.',
    productos: ['veronica-azulino', 'veronica-botella', 'veronica-vino'],
    fechaPublicacion: new Date('2026-03-02'),
  },

  // ─── COLECCIÓN AYLEN ────────────────────────────────
  {
    id: 'coleccion-aylen-2026',
    slug: 'coleccion-aylen-2026',
    titulo: 'Colección Aylen',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Dulzura y elegancia en un solo diseño. La colección Aylen llega en rosa para la mujer que celebra su feminidad con estilo.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669840/AYLEN_1_ROSA_ku0tro.jpg',
    coleccion: 'Colección Aylen',
    contenido: 'Aylen es la colección que celebra la femineidad en su expresión más pura. El tono rosa elegido para esta temporada transmite confianza y suavidad a la vez, equilibrando el estilo romántico con una silueta moderna y favorecedora. Cada detalle fue pensado para realzar la figura de manera natural, convirtiéndola en la elección perfecta para ocasiones especiales o una salida elegante.',
    productos: ['aylen-rosa'],
    fechaPublicacion: new Date('2026-03-01'),
  },

  // ─── COLECCIÓN FIORELLA ─────────────────────────────
  {
    id: 'coleccion-fiorella-2026',
    slug: 'coleccion-fiorella-2026',
    titulo: 'Colección Fiorella',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Sofisticación en verde botella. La colección Fiorella es para la mujer que prefiere destacar con elegancia discreta y mucho carácter.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670005/FIORELLA_1_BOTELLA_jqejv1.jpg',
    coleccion: 'Colección Fiorella',
    contenido: 'Fiorella llega con la fuerza del verde botella, un tono que proyecta sofisticación y presencia sin necesidad de esfuerzo. El diseño del enterizo combina líneas limpias con acabados cuidadosamente trabajados, pensados para una mujer segura de sí misma. La tela seleccionada garantiza comodidad durante todo el día, sin resignar un solo detalle de estilo.',
    productos: ['fiorella-botella'],
    fechaPublicacion: new Date('2026-02-28'),
  },

  // ─── COLECCIÓN RUBI ─────────────────────────────────
  {
    id: 'coleccion-rubi-2026',
    slug: 'coleccion-rubi-2026',
    titulo: 'Colección Rubi',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Pasión y elegancia en vino. La colección Rubi es la elección de la mujer que deja huella en cada espacio que habita.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670080/RUBI_1_VINO_gadgzo.jpg',
    coleccion: 'Colección Rubi',
    contenido: 'El color vino siempre ha representado sofisticación y carácter, y la colección Rubi lo lleva al siguiente nivel. Con un diseño pensado para resaltar la silueta femenina, este enterizo se convierte en el protagonista de cualquier ocasión especial. La intensidad del tono vino combina con la delicadeza de los acabados para ofrecer una prenda que empodera desde el primer vistazo.',
    productos: ['rubi-vino'],
    fechaPublicacion: new Date('2026-02-27'),
  },

  // ─── COLECCIÓN TILZA ────────────────────────────────
  {
    id: 'coleccion-tilza-2026',
    slug: 'coleccion-tilza-2026',
    titulo: 'Colección Tilza',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Clásico marino para la mujer moderna. La colección Tilza apuesta por un tono atemporal que combina con todo y resalta en cualquier ocasión.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670351/TILZA_1_MARINO_xmco1y.jpg',
    coleccion: 'Colección Tilza',
    contenido: 'Tilza es una oda al azul marino, ese tono clásico que nunca pasa de moda y que siempre proyecta elegancia y confianza. El diseño del enterizo destaca por sus líneas depuradas y una caída impecable sobre la figura. Pensado para la mujer que valora lo duradero por encima de lo efímero, Tilza es una inversión de estilo que acompañará en incontables momentos especiales.',
    productos: ['tilza-marino'],
    fechaPublicacion: new Date('2026-02-26'),
  },

  // ─── COLECCIÓN VALERIA ──────────────────────────────
  {
    id: 'coleccion-valeria-2026',
    slug: 'coleccion-valeria-2026',
    titulo: 'Colección Valeria',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Calidez y delicadeza en beige. La colección Valeria es la apuesta por la elegancia natural que acompaña desde el día hasta la noche.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670438/VALERIA_1_BEIGE_qcyhaa.jpg',
    coleccion: 'Colección Valeria',
    contenido: 'El beige es el nuevo neutro que lo protagoniza todo, y la colección Valeria lo demuestra con un diseño que irradia calidez y sofisticación a partes iguales. El enterizo fue concebido para adaptarse con naturalidad a distintos ambientes: una reunión importante, un almuerzo especial o una tarde de compras. La tela cae con gracia sobre la figura, aportando comodidad y elegancia en un solo movimiento.',
    productos: ['valeria-beige'],
    fechaPublicacion: new Date('2026-02-25'),
  },

  // ─── COLECCIÓN SHEYLA ───────────────────────────────
  {
    id: 'coleccion-sheyla-2026',
    slug: 'coleccion-sheyla-2026',
    titulo: 'Colección Sheyla',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Frescura azulina para el verano. La colección Sheyla llega con un tono vibrante que captura la energía de la temporada.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670233/SHEYLA_1_AZULINO_agjakd.jpg',
    coleccion: 'Colección Sheyla',
    contenido: 'Sheyla llega cargada de la energía del verano en un tono azulino que evoca cielos despejados y mares en calma. El diseño del enterizo juega con proporciones que favorecen todo tipo de figura, con acabados que aportan ese toque especial que distingue a Vestizo. Es la prenda perfecta para quienes buscan frescura sin renunciar al estilo, ideal para los días más cálidos de la temporada.',
    productos: ['sheyla-azulino'],
    fechaPublicacion: new Date('2026-02-24'),
  },

  // ─── COLECCIÓN ANA ──────────────────────────────────
  {
    id: 'coleccion-ana-2026',
    slug: 'coleccion-ana-2026',
    titulo: 'Colección Ana',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'El rojo que nunca falla. La colección Ana es para la mujer que entra a cualquier lugar y lo llena de presencia y seguridad.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669406/ANA_1_ROJO_yfqakn.jpg',
    coleccion: 'Colección Ana',
    contenido: 'El rojo es el color del poder, y la colección Ana lo sabe perfectamente. Diseñado para la mujer que no teme destacar, este enterizo combina un tono rojo vibrante con cortes que favorecen y realzan la figura de manera natural. Cada detalle, desde la caída de la tela hasta el acabado de las costuras, refleja el compromiso de Vestizo con la calidad y el estilo que perdura.',
    productos: ['ana-rojo'],
    fechaPublicacion: new Date('2026-02-23'),
  },

  // ─── COLECCIÓN MARGARITA ────────────────────────────
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

  // ─── COLECCIÓN RAISA ────────────────────────────────
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

  // ─── COLECCIÓN TANIA ────────────────────────────────
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

  // ─── COLECCIÓN URSULA ───────────────────────────────
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

  // ─── COLECCIÓN ALESIA ───────────────────────────────
  {
    id: 'coleccion-alesia-2026',
    slug: 'coleccion-alesia-2026',
    titulo: 'Colección Alesia',
    temporada: 'Verano',
    anio: 2026,
    descripcion: 'Verde botella con alma propia. La colección Alesia es para la mujer que elige con intención y viste con propósito.',
    imagen: 'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669264/ALESIA_1_BOTELLA_n65a1q.jpg',
    coleccion: 'Colección Alesia',
    contenido: 'Alesia llega como una declaración de intenciones. El verde botella, profundo y elegante, es el protagonista de un diseño que equilibra la estructura con la feminidad. El enterizo fue concebido para la mujer que cuida cada detalle de su imagen y busca prendas que comuniquen quién es sin necesidad de palabras. Confección de primera y tela seleccionada para durar más allá de una temporada.',
    productos: ['alesia-botella'],
    fechaPublicacion: new Date('2026-02-18'),
  },
];