import { Component } from '@angular/core';
import { SportInfrastructure } from 'src/app/interfaces';
import { data } from 'src/app/data';

@Component({
  selector: 'location-displayer',
  templateUrl: './location-displayer.component.html',
  styleUrls: ['./location-displayer.component.scss']
})
export class LocationDisplayerComponent {
  entries: SportInfrastructure[] = data;
}
