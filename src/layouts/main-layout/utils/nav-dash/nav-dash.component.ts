import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav-dash',
  templateUrl: './nav-dash.component.html',
  styleUrls: ['./nav-dash.component.scss'],

})
export class NavDashComponent implements OnInit {
  sidenavisOpen = true;

  @Output()
  sidenavisopenEvent: EventEmitter<boolean> = new EventEmitter(this.sidenavisOpen);

  ngOnInit(): void {

  }
  sidenavisopenEventEmit(action: boolean) {
    this.sidenavisOpen = !action
    this.sidenavisopenEvent.emit(this.sidenavisOpen);
  }

}
