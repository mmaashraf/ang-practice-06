import { Component, input, output, signal } from '@angular/core';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-ticket',
  standalone: true,
  imports: [],
  templateUrl: './ticket.component.html',
  styleUrl: './ticket.component.css'
})
export class TicketComponent {
  inputData = input.required<Ticket>();

  detailsVisible= signal(false);

  onToggleDetails(){
    this.detailsVisible.set(!this.detailsVisible());
  } 

  closeTicket = output();

  markAsCloseTicket(){
    this.closeTicket.emit();
  }
}
