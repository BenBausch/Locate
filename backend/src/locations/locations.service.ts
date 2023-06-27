import { Injectable } from '@nestjs/common';
import { ISportInfrastructure } from 'src/interfaces';

@Injectable()
export class LocationsService {
  data: ISportInfrastructure[] = [
    {
      id: 0,
      name: 'Stadtbredimus Sportshaal',
      sport: 'Basketball',
      imageUrl: 'assets/images/basketball/location1/location1.jpg',
      tags: ['Half Court', 'Good Condition', 'Asphalt', 'Outdoor'],
      coordinates: [49.56072, 6.35764],
      housenumber: null,
      postcode: null,
      street: null,
      countryCode: null,
    },
    {
      id: 1,
      name: 'CS Coque',
      sport: 'Basketball',
      imageUrl: 'assets/images/basketball/location2/location2.jpg',
      tags: ['Full Court', 'Good Condition', 'Wood', 'Indoor'],
      coordinates: [49.62311, 6.15428],
      housenumber: null,
      postcode: null,
      street: null,
      countryCode: null,
    },
    {
      id: 2,
      name: 'CS Roger Krier',
      sport: 'Basketball',
      imageUrl: 'assets/images/basketball/location3/location3.jpg',
      tags: ['Full Court', 'Good Condition', 'Wood', 'Indoor'],
      coordinates: [49.51828, 5.92762],
      housenumber: null,
      postcode: null,
      street: null,
      countryCode: null,
    },
  ];

  getAllLocations(): ISportInfrastructure[] {
    return this.data;
  }

  getLocationById(id: number): ISportInfrastructure {
    return this.data.find((location) => location.id === id);
  }
}
