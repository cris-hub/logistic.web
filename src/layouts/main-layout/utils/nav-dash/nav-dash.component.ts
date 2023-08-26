import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from 'src/core/models/user';

@Component({
  selector: 'app-nav-dash',
  templateUrl: './nav-dash.component.html',
  styleUrls: ['./nav-dash.component.scss'],

})
export class NavDashComponent implements OnInit {
  sidenavisOpen = true;
  @Output() sidenavisopenEvent: EventEmitter<boolean> = new EventEmitter(this.sidenavisOpen);
  @Output() logout: EventEmitter<boolean> = new EventEmitter();
  @Input() user?: User;


  ngOnInit(): void {

  }
  sidenavisopenEventEmit(action: boolean) {
    this.sidenavisOpen = !action
    this.sidenavisopenEvent.emit(this.sidenavisOpen);
  }

}
