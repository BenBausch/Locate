import { Component, Input, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Marker, icon, latLng, tileLayer, Map } from 'leaflet';
import { MapOptions } from 'src/app/interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {
  @Input() options?: MapOptions;
  map?: Map;
  marker?: Marker;
  displayMapUnavailableError = false;

  ngOnInit(): void {
    this.initializeMap();
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['options'] && !changes['options'].firstChange) {
      this.displayMapUnavailableError = false;
      this.updateMap();
    }
  }

  private initializeMap(): void {
    if (this.options && this.options.latitude && this.options.longitude) {
      this.map = new Map('location-map').setView(
        [this.options.latitude, this.options.longitude],
        this.options.zoomLevel
      );

      console.log(this.map);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      this.addMarker();
    } else {
      this.displayMapUnavailableError = true;
    }
  }

  public updateMap(): void {
    if (this.map) {
      this.map.off();
      this.map.remove(); // Remove the existing map
    }
    this.initializeMap();
  }

  private addMarker(): void {
    const markerOptions = {
      icon: icon({
        iconSize: [25, 41],
        iconAnchor: [13, 41],
        iconUrl: 'assets/static/marker-icon.png',
      }),
    };
    if (this.options?.latitude && this.options?.longitude && this.map) {
      const markerPosition = latLng([this.options.latitude, this.options.longitude]);
      this.marker = new Marker(markerPosition, markerOptions).addTo(this.map);
    }
  }
}