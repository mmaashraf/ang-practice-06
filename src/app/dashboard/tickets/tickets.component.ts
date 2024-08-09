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

  tickets: Ticket[] = [];
  
  onAddTicket(ticketData: { title: string; text: string }) {

    console.log(" am i geting this ", ticketData);
    
    const ticket: Ticket = {
      id: Math.random().toString(),
      title: ticketData.title,
      request: ticketData.text,
      status: 'open',
    };
    this.tickets.push(ticket);
  }


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
