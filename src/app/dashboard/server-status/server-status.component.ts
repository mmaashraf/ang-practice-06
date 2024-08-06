import { Component } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent {
  currentStatus : 'unknown' | 'offline' | 'online' = 'online';

  constructor() {
    setInterval(() => {
    const rd = Math.random();
      // if < 0.5  online
      // else if  <0.9 offline
      // else unknown
      if (rd < 0.5) {
        this.currentStatus = 'online';
      } else if (rd < 0.9) {
        this.currentStatus = 'offline';
      } else {
        this.currentStatus = 'unknown';
      }

    }, 2000);
  };
}
