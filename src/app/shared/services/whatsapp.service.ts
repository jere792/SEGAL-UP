import { Injectable } from '@angular/core';
import { APP_CONFIG } from '../../core/data/config.data/config.data';
import { Product } from '../interfaces/product.interface';

@Injectable({ providedIn: 'root' })
export class WhatsappService {

  openProduct(product: Product, size: string = ''): void {
    const message = APP_CONFIG.whatsappMessage(product.nombre, size);
    const url = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  }

  openGeneral(message?: string): void {
    const text = message ?? APP_CONFIG.defaultMessage;
    
    const url = `https://wa.me/${APP_CONFIG.whatsappNumber}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
  }
}
