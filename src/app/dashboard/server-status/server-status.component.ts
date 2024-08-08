import { Component, OnDestroy, OnInit, signal } from '@angular/core';

@Component({
  selector: 'app-server-status',
  standalone: true,
  imports: [],
  templateUrl: './server-status.component.html',
  styleUrl: './server-status.component.css'
})
export class ServerStatusComponent implements OnInit, OnDestroy {
  currentStatus = signal<'unknown' | 'offline' | 'online'>('offline');

  private interval ?: ReturnType<typeof setInterval> ;
  constructor() {

  };

  ngOnInit(): void {
    console.log(" in ngOnInit");
    
    setInterval(() => {
      const rd = Math.random();
        // if < 0.5  online
        // else if  <0.9 offline
        // else unknown
        if (rd < 0.5) {
          this.currentStatus.set('online');
        } else if (rd < 0.9) {
          this.currentStatus.set('offline');
        } else {
          this.currentStatus.set('unknown');
        }
  
      }, 2000);
  }

  ngAfterViewInit(): void {
    console.log(" in ngAfterViewInit");
    
  }

  ngOnDestroy(): void {
    console.log(" in ngOnDestroy");
    clearInterval(this.interval);
  }
}
