import {
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  output,
  viewChild,
  ViewChild,
} from '@angular/core';
import { ButtonComponent } from '../../../shared/button/button.component';
import { ControlComponent } from '../../../shared/control/control.component';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../ticket.model';

@Component({
  selector: 'app-new-ticket',
  standalone: true,
  imports: [ButtonComponent, ControlComponent, FormsModule],
  templateUrl: './new-ticket.component.html',
  styleUrl: './new-ticket.component.css',
})
export class NewTicketComponent {
  @ViewChild('form') private form?: ElementRef<HTMLFormElement>;
  enteredTitle = '';
  enteredText = '';
  add = output<{ title: string; text: string }>();
  // private form = viewChild.required<ElementRef<HTMLFormElement>>('form');
  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      text: this.enteredText,
    });

    this.enteredText = '';
    this.enteredTitle = '';
  }
}
