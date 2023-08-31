import { Injectable } from '@angular/core';
import { Conveyance } from '../../models/conveyance';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ConveyanceService {
  getConveyances() {
    return this.http.get<Conveyance[]>(`${environment.apiUrl}/conveyance`);
  }

  constructor(private http: HttpClient) { }
}
