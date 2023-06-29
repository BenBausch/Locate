export interface ISportInfrastructure {
  id: number | null;
  name: string;
  sport: string;
  imageUrl: string | null;
  tags: string[];
  coordinates: number[];
  housenumber?: number;
  postcode?: number;
  street?: string;
  countryCode?: number;
}
