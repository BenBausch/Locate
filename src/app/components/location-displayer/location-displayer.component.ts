import { Component } from '@angular/core';
import { SportInfrastructure } from 'src/app/interfaces';

@Component({
  selector: 'app-location-displayer',
  templateUrl: './location-displayer.component.html',
  styleUrls: ['./location-displayer.component.scss']
})
export class LocationDisplayerComponent {
  entries: SportInfrastructure[] = [{
    name: 'Location 1',
    sport: 'Basketball',
    imageUrl: 'assets/images/basketball/location1/location1.jpg',
    tags: ['Half Court', 'Good Condition', 'Asphalt', 'Outdoor']
  },
  {
    name: 'Location 2',
    sport: 'Basketball',
    imageUrl: 'assets/images/basketball/location2/location2.jpg',
    tags: ['Full Court', 'Good Condition', 'Wood', 'Stadium', 'Indoor']
  },
  {
    name: 'Location 3',
    sport: 'Basketball',
    imageUrl: 'assets/images/basketball/location3/location3.jpg',
    tags: ['Full Court', 'Good Condition', 'Wood', 'Indoor']
  }
  ]
}
