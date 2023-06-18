export interface SportInfrastructure {
    id: number,
    name: string,
    sport: string,
    imageUrl: string,
    tags: string[],
    // Everything realted to the address
    coordinates: number[],
    housenumber?: number ,
    postcode?: number,
    street?: string,
    countryCode?: number
}