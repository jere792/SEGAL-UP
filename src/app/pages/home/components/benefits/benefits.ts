import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

interface Benefit {
  icon: string;
  title: string;
  description: string;
  colorClass: string;
}

@Component({
  selector: 'app-benefits',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './benefits.html',
  styleUrl: './benefits.scss'
})
export class Benefits {
  benefits: Benefit[] = [
    {
      icon: 'pi-globe',
      title: 'Envíos Globales',
      description: 'Llegamos a todo el Perú y el extranjero',
      colorClass: 'blue'
    },
    {
      icon: 'pi-whatsapp',
      title: 'Atención Inmediata',
      description: 'Asesoría directa vía WhatsApp',
      colorClass: 'green'
    },
    {
      icon: 'pi-sparkles',
      title: 'Diseños Exclusivos',
      description: 'Piezas únicas de colección limitada',
      colorClass: 'gold'
    },
    {
      icon: 'pi-verified',
      title: 'Calidad Garantizada',
      description: 'Materiales y acabados impecables',
      colorClass: 'purple'
    }
  ];
}
