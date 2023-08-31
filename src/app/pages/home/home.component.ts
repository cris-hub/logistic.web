import { Component, OnInit } from '@angular/core';
import {MatGridListModule} from '@angular/material/grid-list';
import { PlaceService } from 'src/app/core/services/places/place.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  standalone: true,
  imports: [MatGridListModule],
})
export class HomeComponent implements OnInit {

  public labels: any;
  
  constructor(private placeService : PlaceService){

  }

  ngOnInit(): void {
  }

  getPlaces(){

    this.placeService.getPlaces();
  }
}
