import { ISportInfrastructure } from 'src/interfaces';

export class SportInfrastructure implements ISportInfrastructure {
  constructor(
    public id,
    public name,
    public sport,
    public imageUrl,
    public tags,
    public coordinates,
    public housenumber,
    public postcode,
    public street,
    public countryCode,
  ) {}
}
