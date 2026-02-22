export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  precio?: number;
  imagenes: string[];
  categoria: string;
  tallas?: string[];
  colores?: string[];
  fechaCreacion: Date;
  disponible: boolean;
  destacado?: boolean;
  whatsappMessage?: string;
}
