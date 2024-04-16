import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'email-Supremo';

  mittente: string = '';
  destinatario: string = '';
  oggetto: string = '';
  testo: string = '';
  emails: { oggetto: string, mittente: string, destinatario: string, testo: string }[] = [];

  salvaEmail() {
    if (!this.mittente || !this.destinatario || !this.oggetto || !this.testo) {
      alert('é obbligatorio compilare i campi pls');
      return false;
    }
  
    const emails = { oggetto: this.oggetto, mittente: this.mittente, destinatario: this.destinatario, testo: this.testo };
    this.emails.push(emails);
   
    this.mittente = '';
    this.destinatario = '';
    this.oggetto = '';
    this.testo = '';
  
    return false;
  }
}