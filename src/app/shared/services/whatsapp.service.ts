import { Injectable } from '@angular/core';
import { Product } from '../interfaces/product.interface';

@Injectable({
  providedIn: 'root'
})
export class WhatsappService {
  // Asegúrate de que el número esté sin el '+' ni espacios para la API de WhatsApp
  private readonly phoneNumber = '51924911967'; 

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
    let mensaje = `¡Hola Vestizo! 🌸\n\nVengo desde su página web y estoy interesada en:\n\n👗 *${producto.nombre}*`;
    
    if (producto.precio) {
      mensaje += `\n💰 Precio: S/ ${producto.precio.toFixed(2)}`;
    }
    
    mensaje += `\n\n¿Me podrían confirmar si tienen disponibilidad de tallas por favor? ✨`;
    
    return mensaje;
  }
}
