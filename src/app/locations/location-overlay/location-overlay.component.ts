import { Component, Input, OnInit } from '@angular/core';
import { data } from 'src/app/data';
import { SportInfrastructure, MapOptions } from 'src/app/interfaces';

@Component({
  selector: 'location-overlay',
  templateUrl: './location-overlay.component.html',
  styleUrls: ['./location-overlay.component.scss']
})
export class LocationOverlayComponent implements OnInit{
  @Input() id!:number;

  sportInf?: SportInfrastructure;
  options?: MapOptions;

  constructor() {
    
  }

  ngOnInit(): void {
    this.sportInf = this.getFurtherDetails();
    console.log(this.sportInf?.tags);

    this.options = {
      tileLayer: 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
      attribution: 'OpenStreetMap contributors helped',
      zoomLevel: 15,
      latitude: this.sportInf?.coordinates[0],
      logitude: this.sportInf?.coordinates[1]
    }
  }
  
  getFurtherDetails() {
    const details = data.at(this.id) as SportInfrastructure;
    return details;
  }

}
