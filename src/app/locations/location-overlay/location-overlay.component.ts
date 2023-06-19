import { Component, Input, OnInit, inject } from '@angular/core';
import { data } from 'src/app/data';
import { SportInfrastructure, MapOptions } from 'src/app/interfaces';
import { LocationDataService } from 'src/app/services/location-data.service';

@Component({
  selector: 'location-overlay',
  templateUrl: './location-overlay.component.html',
  styleUrls: ['./location-overlay.component.scss']
})
export class LocationOverlayComponent implements OnInit{
  @Input() id:number = -1;

  sportInf?: SportInfrastructure;
  options?: MapOptions;

  locationDataService: LocationDataService = inject(LocationDataService);

  ngOnInit(): void {
    this.sportInf = this.locationDataService.getSportInfrastructureById(Number(this.id));
    this.options = {
      tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'OpenStreetMap contributors helped',
      zoomLevel: 15,
      latitude: this.sportInf?.coordinates[0],
      longitude: this.sportInf?.coordinates[1]
    }
  }
}