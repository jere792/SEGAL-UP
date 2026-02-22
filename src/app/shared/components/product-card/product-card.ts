import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces';
import { WhatsappService } from '../../services';

@Component({
  selector: 'app-product-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-card.html',
  styleUrls: ['./product-card.scss']
})
export class ProductCardComponent  {
  @Input() product!: Product;

  constructor(private whatsappService: WhatsappService) {}

  consultarProducto(): void {
    this.whatsappService.enviarConsulta(this.product);
  }
}
