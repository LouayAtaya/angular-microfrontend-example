import { Component } from '@angular/core';
import { fromEvent } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  isCollapsed = false;

  constructor(){

  }

  ngOnInit() {
    fromEvent<CustomEvent>(window, 'app-event-bus').subscribe((e) =>   this.onEventHandler(e));
  }

  onEventHandler(e: CustomEvent) {
    if (e.detail.eventType === 'orders') {
      alert(e.detail.customData)
    }
  }
}
