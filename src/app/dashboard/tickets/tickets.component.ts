import { Component } from '@angular/core';
import { NewTicketComponent } from './new-ticket/new-ticket.component';
import { Ticket } from './ticket.model';
import { TicketComponent } from './ticket/ticket.component';

@Component({
  selector: 'app-tickets',
  standalone: true,
  imports: [NewTicketComponent, TicketComponent],
  templateUrl: './tickets.component.html',
  styleUrl: './tickets.component.css',
})
export class TicketsComponent {
  onAddTicket(ticketData: { title: string; text: string }) {
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };
    this.tickets.push(ticket);
  }
  tickets: Ticket[] = [];

  onCloseTicket(id: string) {
    // this.tickets = this.tickets.filter((ticket) => {
    //   ticket.id !== id;
    // });
    this.tickets = this.tickets.map((ticket) => {
      if (ticket.id === id) {
        return { ...ticket, status: 'closed' }; // Create a new object with updated status
      }
      return ticket; // Return the original ticket if it's not the one to be closed
    });
  }
}
