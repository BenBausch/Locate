import { Component, inject } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { MatChip } from '@angular/material/chips';
import { IMapOptions } from 'src/app/interfaces';
import { GeolocationService } from 'src/app/services/geolocation.service';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss'],
})
export class NewLocationComponent {
  newLocationForm = new FormGroup({
    name: new FormControl(),
    sport: new FormControl(),
    imageUrl: new FormControl(),
    roofingTags: new FormControl(),
    latitude: new FormControl(),
    longitude: new FormControl(),
  });

  options: IMapOptions = {
    tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    attribution: 'OpenStreetMap contributors helped',
    zoomLevel: 15,
    latitude: undefined,
    longitude: undefined,
  };

  protected geolocation?: number[];
  selectedTags: string[] = [];
  roofingTags: string[] = ['Indoor', 'Outdoor'];
  conditionTags: string[] = [
    'Good Condition',
    'Medium Condition',
    ' Bad Condition',
  ];
  courtTags: string[] = ['Full Court', 'HalfCourt'];
  flooringTags: string[] = ['Asphalt', 'Concrete', 'PVC / Vinyl', 'Wood'];

  geolocationService: GeolocationService = inject(GeolocationService);

  async getUserGeolocation() {
    this.geolocation = await this.geolocationService.getUserGeolocation();
    if (this.geolocation) {
      this.options = {
        tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
        attribution: 'OpenStreetMap contributors helped',
        zoomLevel: 15,
        latitude: this.geolocation[0],
        longitude: this.geolocation[1],
      };
    }
  }

  toggleChipSelection(chip: string) {
    console.log(chip);
  }
}
