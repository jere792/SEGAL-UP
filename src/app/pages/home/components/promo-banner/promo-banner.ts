import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../../../shared/services/whatsapp.service';

@Component({
  selector: 'app-promo-banner',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './promo-banner.html',
  styleUrl: './promo-banner.scss'
})
export class PromoBanner {
  constructor(private whatsapp: WhatsappService) {}

  contactar(): void {
    this.whatsapp.openGeneral();
  }
}
