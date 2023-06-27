import { Component, inject } from '@angular/core';
import { ISportInfrastructure } from 'src/app/interfaces';
import { LocationDataService } from 'src/app/services/location-data.service';

@Component({
  selector: 'location-displayer',
  templateUrl: './location-displayer.component.html',
  styleUrls: ['./location-displayer.component.scss'],
})
export class LocationDisplayerComponent {
  entries: ISportInfrastructure[] = [];
  locationService: LocationDataService = inject(LocationDataService);

  constructor() {
    this.locationService
      .getAllSportInfrastructures()
      .subscribe((data) => (this.entries = data));
  }
}
