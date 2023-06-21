import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MapOptions } from 'src/app/interfaces';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss']
})
export class NewLocationComponent {
  // newLocationForm = new FormGroup({
  //   name: new FormControl(),
  //   sport: new FormControl(),
  //   imageUrl: new FormControl(),
  //   tags: new FormControl(),
  //   coordinates: new FormControl(),
  //   housenumber: new FormControl() ,
  //   postcode: new FormControl(),
  //   street: new FormControl(),
  //   countryCode: new FormControl()
  // });
  options: MapOptions = {
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: 'OpenStreetMap contributors helped',
    zoomLevel: 15,
    latitude: undefined,
    longitude: undefined
  };

  protected geolocation?: number[];

  geolocationService: GeolocationService = inject(GeolocationService);

  async getUserGeolocation() {
    this.geolocation = await this.geolocationService.getUserGeolocation();
    if (this.geolocation) {
      this.options = {
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: 'OpenStreetMap contributors helped',
        zoomLevel: 15,
        latitude: this.geolocation[0],
        longitude: this.geolocation[1]
      }; 
    }
  }
  
}
