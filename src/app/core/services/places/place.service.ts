import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Place } from '../../models/place';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PlaceService {
  getPlaces() {
    return this.http.get<Place[]>(`${environment.apiUrl}/place`);
  }

  constructor(private http: HttpClient) { }
}
