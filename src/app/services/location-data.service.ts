import { Injectable } from '@angular/core';
import { SportInfrastructure } from '../interfaces';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class LocationDataService {

  private _url: string = "http://localhost:3000";

  constructor(private http: HttpClient) { }

  getAllSportInfrastructures(): Observable<SportInfrastructure[]> {
    return this.http.get<SportInfrastructure[]>(this._url + "/locations");
  }

  getSportInfrastructureById(id: number): Observable<SportInfrastructure> {
    const location = this.http.get<SportInfrastructure>(this._url + "/locations/" + id );
    return location;
  }
}
