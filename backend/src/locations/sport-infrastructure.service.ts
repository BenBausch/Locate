import { Injectable } from '@nestjs/common';
import { ISportInfrastructure } from 'src/interfaces';
import { SportInfrastructure } from './sport-infrastructure.model';

@Injectable()
export class SportInfrastructureService {
  data: SportInfrastructure[] = [
    new SportInfrastructure(
      0,
      'Stadtbredimus Sportshaal',
      'Basketball',
      'assets/images/basketball/location1/location1.jpg',
      ['Half Court', 'Good Condition', 'Asphalt', 'Outdoor'],
      [49.56072, 6.35764],
      null,
      null,
      null,
      null,
    ),
    new SportInfrastructure(
      1,
      'CS Coque',
      'Basketball',
      'assets/images/basketball/location2/location2.jpg',
      ['Full Court', 'Good Condition', 'Wood', 'Indoor'],
      [49.62311, 6.15428],
      null,
      null,
      null,
      null,
    ),
    new SportInfrastructure(
      2,
      'CS Roger Krier',
      'Basketball',
      'assets/images/basketball/location3/location3.jpg',
      ['Full Court', 'Good Condition', 'Wood', 'Indoor'],
      [49.51828, 5.92762],
      null,
      null,
      null,
      null,
    ),
  ];

  getAllLocations(): ISportInfrastructure[] {
    return this.data;
  }

  getLocationById(id: number): ISportInfrastructure {
    return this.data.find((location) => location.id === id);
  }

  addNewLocation(sportInfrastructure: ISportInfrastructure): number {
    sportInfrastructure.id = this.data.length;
    this.data.push(sportInfrastructure as SportInfrastructure);
    return sportInfrastructure.id;
  }
}
