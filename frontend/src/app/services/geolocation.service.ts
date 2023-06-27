import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GeolocationService {

  constructor() { }

  async getUserGeolocation(): Promise<number[] | undefined> {
    if (navigator.geolocation) {
      try {
        const position = await new Promise<GeolocationPosition>((resolve, reject) => {
          navigator.geolocation.getCurrentPosition(resolve, reject,{enableHighAccuracy: true});
        });
  
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        const userGeolocation: number[] = [lat, lng];
        return userGeolocation;
      } catch (error) {
        return undefined;
      }
    } else {
      return undefined;
    }
  }

}
