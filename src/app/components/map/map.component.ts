import { Component, Input, OnInit } from '@angular/core';
import { Marker, icon, latLng, tileLayer, Map } from 'leaflet';
import { MapOptions } from 'src/app/interfaces';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit{

  @Input() options?: MapOptions;
  map?: Map;
  marker?: Marker;
  displayMapUnavailableError = false;

  ngOnInit(): void {
    if (this.options && this.options.latitude && this.options.longitude){
      this.map = new Map('location-map').setView([this.options.latitude,
                                                  this.options.longitude ],
                                                 this.options.zoomLevel);

      tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(this.map);

      // Create the marker and add it to the map
      const markerOptions = {
        icon: icon({
          iconSize: [25, 41],
          iconAnchor: [13, 41],
          iconUrl: 'assets/static/marker-icon.png',
        }),
      };
      const markerPosition = latLng([ this.options.latitude,
                                      this.options.longitude]);
      this.marker = new Marker(markerPosition, markerOptions).addTo(this.map);
    } else {
      this.displayMapUnavailableError = true;
    }
  }
}