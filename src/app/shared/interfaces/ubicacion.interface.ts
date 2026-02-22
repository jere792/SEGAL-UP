export interface Ubicacion {
  nombre: string;
  direccion: string;
  ciudad: string;
  telefono: string;
  email?: string;
  horarios: Horario[];
  mapa?: string;
}

export interface Horario {
  dia: string;
  apertura: string;
  cierre: string;
  cerrado?: boolean;
}
