import { Injectable } from '@angular/core';
import { ISportInfrastructure } from '../interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class LocationDataService {
  constructor(private http: HttpClient) {}

  getAllSportInfrastructures(): Observable<ISportInfrastructure[]> {
    return this.http.get<ISportInfrastructure[]>('api/locations/all');
  }

  getSportInfrastructureById(id: number): Observable<ISportInfrastructure> {
    const location = this.http.get<ISportInfrastructure>(
      '/api/locations/' + id
    );
    return location;
  }

  postNewSportInfrastructure(
    data: ISportInfrastructure,
    imageData: ImageData
  ) {}
}
