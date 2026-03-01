import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WhatsappService } from '../../services';

@Component({
  selector: 'app-whatsapp-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './whatsapp-button.html',
  styleUrl: './whatsapp-button.scss',
})
export class WhatsappButton {
  @Input() message: string = '¡Hola! Quisiera más información sobre sus productos.';
  @Input() fixed: boolean = true;
  @Input() label: string = '¿Necesitas ayuda?';
  @Input() showLabel: boolean = false;

  constructor(private whatsappService: WhatsappService) {}

  abrirWhatsapp(): void {
    this.whatsappService.openGeneral(this.message);
  }
}
