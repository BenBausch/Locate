import { Component, Input } from '@angular/core';
import { ISportInfrastructure } from 'src/app/interfaces';

@Component({
  selector: 'app-location-entry',
  templateUrl: './location-entry.component.html',
  styleUrls: ['./location-entry.component.scss'],
})
export class LocationEntryComponent {
  @Input() sport_inf?: ISportInfrastructure;
}
