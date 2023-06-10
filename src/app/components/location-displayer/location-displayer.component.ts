import { Component } from '@angular/core';
import { SportInfrastructure } from 'src/app/interfaces';

@Component({
  selector: 'app-location-displayer',
  templateUrl: './location-displayer.component.html',
  styleUrls: ['./location-displayer.component.scss']
})
export class LocationDisplayerComponent {
  entries: SportInfrastructure[] = [{
    name: 'Stadtbredimus Sportshaal',
    sport: 'Basketball',
    imageUrl: 'assets/images/basketball/location1/location1.jpg',
    tags: ['Half Court', 'Good Condition', 'Asphalt', 'Outdoor'],
    coordinates: [49.56072, 6.35764],
    housenumber: undefined,
    postcode: undefined,
    street: undefined,
    countryCode: undefined
  },
  {
    name: 'CS Coque',
    sport: 'Basketball',
    imageUrl: 'assets/images/basketball/location2/location2.jpg',
    tags: ['Full Court', 'Good Condition', 'Wood', 'Stadium', 'Indoor'],
    coordinates: [49.62311, 6.15428],
    housenumber: undefined,
    postcode: undefined,
    street: undefined,
    countryCode: undefined
  },
  {
    name: 'CS Roger Krier',
    sport: 'Basketball',
    imageUrl: 'assets/images/basketball/location3/location3.jpg',
    tags: ['Full Court', 'Good Condition', 'Wood', 'Indoor'],
    coordinates: [49.51828, 5.92762],
    housenumber: undefined,
    postcode: undefined,
    street: undefined,
    countryCode: undefined
  }
  ]
}
