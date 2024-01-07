import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  
})

export class AppComponent {
  mostraMessaggio: boolean = true;
  toggleMessaggio() {
    this.mostraMessaggio = !this.mostraMessaggio;
  }
  title = 'esercitazione13_14';
  nome= "app";
  CONTANTI = [
    {id: 1, name:'Soldi Spocrchi'},
    {id: 2, name:'dollari'},
    {id: 5, name:'euro'},
    {id: 3, name:'lira egiziana'},
    {id: 4, name:'soldi puliti'}



  ];

}

