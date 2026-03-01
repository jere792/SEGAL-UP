import {
  Component, OnDestroy, AfterViewInit,
  ElementRef, ViewChild, PLATFORM_ID, Inject, NgZone, ChangeDetectorRef
} from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

const STORE_LAT = -12.0650;
const STORE_LNG = -77.0108;
const STORE_NAME = 'Segal Up Peru — Galería La Moda de Gamarra';

@Component({
  selector: 'app-store-map',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './store-map.html',
  styleUrl: './store-map.scss',
})
export class StoreMap implements AfterViewInit, OnDestroy {
  @ViewChild('mapContainer') mapContainer!: ElementRef;

  routeLoading = false;
  routeDrawn   = false;
  routeDistance = '';
  routeDuration = '';
  errorMsg = '';

  private map: any         = null;
  private routeLayer: any  = null;
  private userMarker: any  = null;
  private L: any           = null;
  private ro: ResizeObserver | null = null;

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private zone: NgZone,
    private cdr: ChangeDetectorRef
  ) {}

  async ngAfterViewInit(): Promise<void> {
    if (!isPlatformBrowser(this.platformId)) return;
    this.zone.runOutsideAngular(() => this.initMap());
  }

  ngOnDestroy(): void {
    this.ro?.disconnect();
    this.map?.remove();
  }

  private async initMap(): Promise<void> {
    this.L = await import('leaflet');

    delete (this.L.Icon.Default.prototype as any)._getIconUrl;
    this.L.Icon.Default.mergeOptions({
      iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
      iconUrl:       'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
      shadowUrl:     'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
    });

    const el = this.mapContainer.nativeElement;

    this.map = this.L.map(el, {
      center: [STORE_LAT, STORE_LNG],
      zoom: 17,
      zoomControl: true,
      preferCanvas: true,
    });

    this.L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      maxZoom: 19,
      keepBuffer: 4,
    }).addTo(this.map);

    const storeIcon = this.L.divIcon({
      className: '',
      html: `<div style="width:36px;height:36px;background:#c8a96e;border:3px solid #fff;border-radius:50% 50% 50% 0;transform:rotate(-45deg);box-shadow:0 3px 10px rgba(0,0,0,0.35);"></div>`,
      iconSize: [36, 36],
      iconAnchor: [18, 36],
      popupAnchor: [0, -40],
    });

    this.L.marker([STORE_LAT, STORE_LNG], { icon: storeIcon })
      .addTo(this.map)
      .bindPopup(
        `<div style="font-family:sans-serif;padding:2px 0">
          <strong style="font-size:12px;display:block;margin-bottom:2px">${STORE_NAME}</strong>
          <span style="font-size:10px;color:#666">Jr. Sebastián Barranca 1595, T. 127–128</span>
        </div>`,
        { maxWidth: 200, minWidth: 160 }
      )
      .openPopup();

    this.ro = new ResizeObserver(entries => {
      if (entries[0].contentRect.width > 0) {
        this.map.invalidateSize({ animate: false });
      }
    });
    this.ro.observe(el);

    requestAnimationFrame(() => this.map.invalidateSize({ animate: false }));
  }

  trazarRuta(): void {
    this.zone.run(() => {
      this.errorMsg     = '';
      this.routeLoading = true;
    });

    if (!navigator.geolocation) {
      this.zone.run(() => {
        this.routeLoading = false;
        this.errorMsg = 'Tu navegador no soporta geolocalización.';
      });
      return;
    }

    navigator.geolocation.getCurrentPosition(
      pos  => this.calcularRuta(pos.coords.latitude, pos.coords.longitude),
      ()   => this.zone.run(() => {
        this.routeLoading = false;
        this.errorMsg = 'No se pudo obtener tu ubicación. Verifica los permisos.';
      }),
      { timeout: 8000, enableHighAccuracy: false, maximumAge: 60000 }
    );
  }

  private async calcularRuta(userLat: number, userLng: number): Promise<void> {
    try {
      const url = `https://router.project-osrm.org/route/v1/driving/${userLng},${userLat};${STORE_LNG},${STORE_LAT}?overview=full&geometries=geojson`;
      const res  = await fetch(url, { signal: AbortSignal.timeout(10000) });
      if (!res.ok) throw new Error(`HTTP ${res.status}`);

      const data = await res.json();
      if (data.code !== 'Ok' || !data.routes?.length) throw new Error('Sin ruta');

      const route  = data.routes[0];
      const coords: [number, number][] = route.geometry.coordinates.map(
        ([lng, lat]: [number, number]) => [lat, lng]
      );

      // Dibuja la ruta fuera de zone (operaciones DOM de Leaflet)
      this.zone.runOutsideAngular(() => {
        if (this.routeLayer) this.map.removeLayer(this.routeLayer);
        if (this.userMarker) this.map.removeLayer(this.userMarker);

        this.routeLayer = this.L.polyline(coords, {
          color: '#c8a96e', weight: 5, opacity: 0.9,
          lineJoin: 'round', lineCap: 'round',
        }).addTo(this.map);

        const userIcon = this.L.divIcon({
          className: '',
          html: `<div style="width:14px;height:14px;background:#1a73e8;border:3px solid #fff;border-radius:50%;box-shadow:0 0 0 4px rgba(26,115,232,0.3);"></div>`,
          iconSize: [14, 14], iconAnchor: [7, 7],
        });

        this.userMarker = this.L.marker([userLat, userLng], { icon: userIcon })
          .addTo(this.map)
          .bindPopup('<strong>Tu ubicación</strong>');

        this.map.fitBounds(this.routeLayer.getBounds(), { padding: [50, 50], animate: true });
      });

      const km   = (route.distance / 1000).toFixed(1);
      const mins = Math.round(route.duration / 60);

      // Actualiza el estado dentro de zone para que Angular detecte los cambios
      this.zone.run(() => {
        this.routeDistance = `${km} km`;
        this.routeDuration = mins >= 60 ? `${Math.floor(mins/60)}h ${mins%60}min` : `${mins} min`;
        this.routeDrawn    = true;
        this.routeLoading  = false;
        this.cdr.detectChanges();
      });

    } catch (err: any) {
      this.zone.run(() => {
        this.errorMsg = err?.name === 'TimeoutError'
          ? 'Conexión lenta. Intenta de nuevo.'
          : 'No se pudo calcular la ruta. Intenta de nuevo.';
        this.routeLoading = false;
        this.cdr.detectChanges();
      });
    }
  }

  limpiarRuta(): void {
    this.zone.runOutsideAngular(() => {
      if (this.routeLayer) { this.map.removeLayer(this.routeLayer); this.routeLayer = null; }
      if (this.userMarker) { this.map.removeLayer(this.userMarker); this.userMarker = null; }
      this.map.setView([STORE_LAT, STORE_LNG], 17, { animate: true });
    });
    this.routeDrawn    = false;
    this.routeDistance = '';
    this.routeDuration = '';
    this.errorMsg      = '';
  }
}