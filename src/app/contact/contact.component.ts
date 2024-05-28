// contact.component.ts
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
})
export class ContactComponent {
  contact = {
    email: '',
    message: ''
  };

  contactImage = 'assets/contact-banner.png';

  onSubmit() {
    console.log('Email:', this.contact.email);
    console.log('Mensagem:', this.contact.message);
    this.contact.email = '';
    this.contact.message = '';
  }
}
