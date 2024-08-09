import { AfterViewInit, Component, ElementRef, OnInit, output, ViewChild } from '@angular/core';
import { ControlComponent } from '../../../shared/control/control.component';
import { ButtonComponent } from '../../../shared/button/button.component';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ControlComponent, ButtonComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent implements AfterViewInit, OnInit {
  enteredTitle = '';
  enteredText = '';

  addTicket =  output<{
    title: string,
    text: string,
  }>();


  @ViewChild('form') form ?: ElementRef<HTMLFormElement>;

  // onSubmit(inputTitle: string, inputText: string, form : HTMLFormElement) {
  //   console.log("submitted ");
  //   const enteredTitle = inputTitle, enteredText = inputText;
  //   console.log(enteredTitle, enteredText);
  //   form.reset();
  // }
  ngOnInit() {
    console.log("ngOnInit");
  }
  // onSubmit(inputTitle: string, inputText: string) {
  //   console.log("submitted ");
  //   const enteredTitle = inputTitle, enteredText = inputText;
  //   console.log(enteredTitle, enteredText);
  //   this.form?.nativeElement.reset();

  //   // trigger something to add to list
  //   this.addTicket.emit({
  //     title: enteredTitle,
  //     text: enteredText,
  //   });
  // }

  onSubmit() {
    console.log("submitted ");

    console.log("TOOOOO ", this.enteredTitle, this.enteredText);
    // this.form?.nativeElement.reset();

    // trigger something to add to list
    this.addTicket.emit({
      title: this.enteredTitle,
      text: this.enteredText,
    });

    this.enteredText = '';
    this.enteredTitle = '';
  }

  ngAfterViewInit(): void {
    console.log("ngAfterViewInit");
  }

}
