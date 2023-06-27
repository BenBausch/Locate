import { Component, Input, OnInit, inject } from '@angular/core';
import { ISportInfrastructure, IMapOptions } from 'src/app/interfaces';
import { LocationDataService } from 'src/app/services/location-data.service';

@Component({
  selector: 'location-overlay',
  templateUrl: './location-overlay.component.html',
  styleUrls: ['./location-overlay.component.scss'],
})
export class LocationOverlayComponent implements OnInit {
  @Input() id: number = -1;

  sportInf?: ISportInfrastructure;
  options?: IMapOptions;

  locationDataService: LocationDataService = inject(LocationDataService);

  ngOnInit(): void {
    this.locationDataService
      .getSportInfrastructureById(Number(this.id))
      .subscribe(async (data: ISportInfrastructure) => {
        this.sportInf = data;
        this.options = {
          tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
          attribution: 'OpenStreetMap contributors helped',
          zoomLevel: 15,
          latitude: this.sportInf?.coordinates[0],
          longitude: this.sportInf?.coordinates[1],
        };
      });
  }
}
