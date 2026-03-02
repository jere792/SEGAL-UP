import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { PageHero } from '../../shared/components/page-hero/page-hero';

interface FaqItem {
  pregunta: string;
  respuesta: string;
  abierta: boolean;
}

interface FaqGroup {
  icono: string;
  titulo: string;
  items: FaqItem[];
}

@Component({
  selector: 'app-preguntas-frecuentes',
  standalone: true,
  imports: [CommonModule, PageHero],
  templateUrl: './preguntas-frecuentes.html',
  styleUrl: './preguntas-frecuentes.scss',
})
export class PreguntasFrecuentes implements OnInit {
  constructor(private title: Title) {}

  ngOnInit(): void {
    this.title.setTitle('Preguntas Frecuentes - Vestizo');
  }

  grupos: FaqGroup[] = [
    {
      icono: 'pi-truck',
      titulo: 'Envíos y entregas',
      items: [
        {
          pregunta: '¿Hacen envíos a todo el Perú?',
          respuesta:
            'Sí, realizamos envíos diarios a todo el país. Trabajamos con las principales empresas de courier para garantizar que tu pedido llegue a tiempo y en perfectas condiciones.',
          abierta: false,
        },
        {
          pregunta: '¿Cuánto tiempo demora el envío?',
          respuesta:
            'Lima Metropolitana: 1 a 2 días hábiles. Provincias: 3 a 5 días hábiles según la zona. El tiempo puede variar dependiendo de la empresa de courier y la ubicación.',
          abierta: false,
        },
        {
          pregunta: '¿Cuál es el costo de envío?',
          respuesta:
            'El costo varía según el destino y el peso del paquete. Te confirmamos el monto exacto al momento de coordinar tu pedido por WhatsApp.',
          abierta: false,
        },
        {
          pregunta: '¿Puedo recoger mi pedido en tienda?',
          respuesta:
            'Puedes pasar directamente a nuestra tienda en la Galería La Moda de Gamarra, Jr. Sebastián Barranca 1595, tiendas 127–128, de lunes a viernes de 8:00 am a 6:00 pm y sábados de 8:00 am a 2:00 pm.',
          abierta: false,
        },
      ],
    },
    {
      icono: 'pi-tag',
      titulo: 'Tallas y productos',
      items: [
        {
          pregunta: '¿Qué tallas manejan?',
          respuesta:
            'Trabajamos con tallas S, M, L y XL en la mayoría de nuestros modelos. Algunos diseños exclusivos pueden variar. Si tienes dudas sobre una talla específica, escríbenos por WhatsApp.',
          abierta: false,
        },
        {
          pregunta: '¿Los colores son exactamente como en las fotos?',
          respuesta:
            'Hacemos el mayor esfuerzo para que las fotos representen fielmente los colores reales. Sin embargo, pueden existir pequeñas variaciones dependiendo de la pantalla de tu dispositivo.',
          abierta: false,
        },
        {
          pregunta: '¿Venden al por mayor?',
          respuesta:
            'Sí, somos mayoristas y confeccionistas. Contáctanos directamente por WhatsApp para coordinar cantidades y precios especiales.',
          abierta: false,
        },
        {
          pregunta: '¿Puedo hacer cambios o devoluciones?',
          respuesta:
            'Aceptamos cambios dentro de los 7 días posteriores a la recepción, siempre que la prenda esté en perfectas condiciones, sin uso y con etiqueta original. No aplica para prendas en oferta.',
          abierta: false,
        },
      ],
    },
    {
      icono: 'pi-comments',
      titulo: 'Cómo comprar / Contacto',
      items: [
        {
          pregunta: '¿Cómo hago un pedido?',
          respuesta:
            'Elige la prenda en nuestro catálogo, presiona "Lo quiero" y serás redirigida a WhatsApp donde coordinaremos los detalles de tu pedido, talla, color y envío.',
          abierta: false,
        },
        {
          pregunta: '¿Cuáles son los medios de pago?',
          respuesta:
            'Aceptamos transferencias bancarias, Yape, Plin y pago en efectivo en tienda. Al coordinar por WhatsApp te indicamos el método más conveniente según tu ubicación.',
          abierta: false,
        },
        {
          pregunta: '¿Cómo me contacto con ustedes?',
          respuesta:
            'La forma más rápida es por WhatsApp al +51 924 911 967. También puedes visitarnos en Gamarra durante nuestro horario de atención.',
          abierta: false,
        },
        {
          pregunta: '¿Tienen Instagram?',
          respuesta:
            'Sí, síguenos como @segalupperu para ver nuestras últimas colecciones, novedades y promociones especiales antes que nadie.',
          abierta: false,
        },
      ],
    },
  ];

  toggle(item: FaqItem): void {
    item.abierta = !item.abierta;
  }
}
