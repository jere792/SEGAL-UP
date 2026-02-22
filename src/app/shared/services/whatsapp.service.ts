import { Injectable } from '@angular/core';
import { Product } from '../interfaces';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  private readonly phoneNumber = '+51 924911967';

  enviarConsulta(producto: Product): void {
    const mensaje = this.generarMensaje(producto);
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  enviarConsultaGeneral(mensaje: string): void {
    const url = `https://wa.me/${this.phoneNumber}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
  }

  private generarMensaje(producto: Product): string {
    return `Hola! Estoy interesado en el siguiente producto:

*${producto.nombre}*
Código: ${producto.id}

¿Podrías darme más información sobre disponibilidad y precio?`;
  }
}
