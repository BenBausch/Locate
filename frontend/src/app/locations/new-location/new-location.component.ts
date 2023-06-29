import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { IMapOptions, ISportInfrastructure } from 'src/app/interfaces';
import { GeolocationService } from 'src/app/services/geolocation.service';
import { notNullOrUndefined, striclyLessThan } from 'src/app/validators';

@Component({
  selector: 'app-new-location',
  templateUrl: './new-location.component.html',
  styleUrls: ['./new-location.component.scss'],
})
export class NewLocationComponent {
  newLocationForm = new FormGroup({
    nameControl: new FormControl('', [
      Validators.required,
      Validators.minLength(4),
      Validators.maxLength(10),
    ]),
    sportControl: new FormControl(null, Validators.required),
    imageUploadControl: new FormControl(),
    roofingTagsControl: new FormControl(null, notNullOrUndefined()),
    flooringTagsControl: new FormControl(null, notNullOrUndefined()),
    conditionTagsControl: new FormControl(null, notNullOrUndefined()),
    courtTagsControl: new FormControl(null, notNullOrUndefined()),
    latitudeControl: new FormControl(100, [
      Validators.required,
      Validators.min(-90),
      Validators.max(90),
    ]),
    longitudeControl: new FormControl(190, [
      Validators.required,
      Validators.min(-180),
      striclyLessThan(180),
    ]),
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
      this.newLocationForm.controls.latitudeControl.setValue(
        this.geolocation[0]
      );
      this.newLocationForm.controls.longitudeControl.setValue(
        this.geolocation[1]
      );
    }
  }

  async submit() {
    console.log(this.newLocationForm.controls.imageUploadControl.value);
    if (this.newLocationForm.valid) {
      const tags = [
        this.newLocationForm.controls.roofingTagsControl.value!,
        this.newLocationForm.controls.flooringTagsControl.value!,
        this.newLocationForm.controls.conditionTagsControl.value!,
        this.newLocationForm.controls.courtTagsControl.value!,
      ];

      const newSportInfrastructure: ISportInfrastructure = {
        id: null,
        name: this.newLocationForm.controls.nameControl.value!,
        sport: this.newLocationForm.controls.sportControl.value!,
        tags: tags,
        imageUrl: null,
        coordinates: [
          this.newLocationForm.controls.latitudeControl.value!,
          this.newLocationForm.controls.longitudeControl.value!,
        ],
      };
    }
  }
}
