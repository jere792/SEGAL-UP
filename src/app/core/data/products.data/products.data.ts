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

  {
    id: 'sofia-verde',
    nombre: 'Vestido Sofía',
    descripcion: 'Diseño exclusivo de la colección Sofía.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772584702/VESTIDO_1_SOFIA-VERDE_nrpexi.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772584704/VESTIDO_2_SOFIA-VERDE_hl08ct.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772584706/VESTIDO_3_SOFIA-VERDE_wchxpv.jpg',
    ],
    categoria: 'Colección Sofía',
    precio: 75,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['verde'],
  },

  {
    id: 'sofia-marron',
    nombre: 'Vestido Sofía',
    descripcion: 'Diseño exclusivo de la colección Sofía.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772584702/VESTIDO_1_SOFIA-MARRON_pdy9vy.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772584705/VESTIDO_2_SOFIA-MARRON_mc2ypb.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772584703/VESTIDO_3_SOFIA-MARRON_vb7w6w.jpg',
    ],
    categoria: 'Colección Sofía',
    precio: 75,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['mostaza'],
  },

  {
    id: 'alesia-botella',
    nombre: 'Enterizo Alesia',
    descripcion: 'Diseño exclusivo de la colección Alesia.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669264/ALESIA_1_BOTELLA_n65a1q.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669265/ALESIA_2_BOTELLA_xij49y.jpg',
    ],
    categoria: 'Colección Alesia',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['botella'],
  },

  {
    id: 'ana-rojo',
    nombre: 'Enterizo Ana',
    descripcion: 'Diseño exclusivo de la colección Ana.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669406/ANA_1_ROJO_yfqakn.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669405/ANA_2_ROJO_dq3ufw.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669406/ANA_3_ROJO_hkipam.jpg',
    ],
    categoria: 'Colección Ana',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['rojo'],
  },

  {
    id: 'aylen-rosa',
    nombre: 'Enterizo Aylen',
    descripcion: 'Diseño exclusivo de la colección Aylen.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669840/AYLEN_1_ROSA_ku0tro.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669840/AYLEN_2_ROSA_ssk8ja.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772669841/AYLEN_3_ROSA_sghrdv.jpg',
    ],
    categoria: 'Colección Aylen',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['rosa'],
  },

  {
    id: 'fiorella-botella',
    nombre: 'Enterizo Fiorella',
    descripcion: 'Diseño exclusivo de la colección Fiorella.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670005/FIORELLA_1_BOTELLA_jqejv1.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670007/FIORELLA_2_BOTELLA_euim5t.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670008/FIORELLA_3_BOTELLA_m2hmgf.jpg',
    ],
    categoria: 'Colección Fiorella',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['botella'],
  },

  {
    id: 'rubi-vino',
    nombre: 'Enterizo Rubi',
    descripcion: 'Diseño exclusivo de la colección Rubi.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670080/RUBI_1_VINO_gadgzo.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670078/RUBI_2_VINO_j58eu0.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670077/RUBI_3_VINO_lfvsvj.jpg',
    ],
    categoria: 'Colección Rubi',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['vino'],
  },

  {
    id: 'sheyla-azulino',
    nombre: 'Enterizo Sheyla',
    descripcion: 'Diseño exclusivo de la colección Sheyla.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670233/SHEYLA_1_AZULINO_agjakd.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670234/SHEYLA_2_AZULINO_z7msv0.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670236/SHEYLA_3_AZULINO_ztin55.jpg',
    ],
    categoria: 'Colección Sheyla',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['azulino'],
  },

  {
    id: 'tilza-marino',
    nombre: 'Enterizo Tilza',
    descripcion: 'Diseño exclusivo de la colección Tilza.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670351/TILZA_1_MARINO_xmco1y.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670353/TILZA_2_MARINO_awry6z.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670355/TILZA_3_MARINO_qsiqrm.jpg',
    ],
    categoria: 'Colección Tilza',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['marino'],
  },

  {
    id: 'valeria-beige',
    nombre: 'Enterizo Valeria',
    descripcion: 'Diseño exclusivo de la colección Valeria.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670438/VALERIA_1_BEIGE_qcyhaa.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670440/VALERIA_2_BEIGE_abas2d.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670443/VALERIA_3_BEIGE_avudug.jpg',
    ],
    categoria: 'Colección Valeria',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['beige'],
  },

  {
    id: 'veronica-azulino',
    nombre: 'Enterizo Veronica',
    descripcion: 'Diseño exclusivo de la colección Veronica.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670503/VERONICA_1_AZULINO_tftpx9.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670495/VERONICA_2_AZULINO_zz00w5.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670497/VERONICA_3_AZULINO_r6mbjb.jpg',
    ],
    categoria: 'Colección Veronica',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['azulino'],
  },


    {
    id: 'veronica-botella',
    nombre: 'Enterizo Veronica',
    descripcion: 'Diseño exclusivo de la colección Veronica.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670500/VERONICA_1_BOTELLA_eognjj.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670505/VERONICA_2_BOTELLA_a2eqgv.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670507/VERONICA_3_BOTELLA_g2emav.jpg',
    ],
    categoria: 'Colección Veronica',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['botella'],
  },


    {
    id: 'veronica-vino',
    nombre: 'Enterizo Veronica',
    descripcion: 'Diseño exclusivo de la colección Veronica.',
    imagenes: [
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670509/VERONICA_1_VINO_wrsrtm.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670511/VERONICA_2_VINO_u7zrws.jpg',
      'https://res.cloudinary.com/dpnxbnqxu/image/upload/v1772670514/VERONICA_3_VINO_xihdh5.jpg',
    ],
    categoria: 'Colección Veronica',
    precio: 79,
    fechaCreacion: new Date('2026-02-19'),
    disponible: true,
    destacado: true,
    tonalidades: ['vino'],
  },
];
