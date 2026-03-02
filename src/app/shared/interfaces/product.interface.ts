export type Tonalidad =
  | 'blanco'
  | 'negro'
  | 'beige'
  | 'gris'
  | 'rojo'
  | 'naranja'
  | 'terracota'
  | 'mostaza'
  | 'amarillo'
  | 'verde'
  | 'azul'
  | 'lila'
  | 'turquesa'
  | 'rosa'
  | 'celeste'
  | 'menta'
  | 'lavanda'
  | 'multicolor';

export interface Product {
  id: string;
  nombre: string;
  descripcion: string;
  imagenes: string[];
  categoria: string;
  precio: number;
  fechaCreacion: Date;
  disponible: boolean;
  destacado: boolean;
  tonalidades: Tonalidad[];
}