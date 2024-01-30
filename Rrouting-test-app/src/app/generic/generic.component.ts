import { Component, OnInit } from '@angular/core';
import { Emoji, animals, fruits } from '../models/emoji.model';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-generic',
  templateUrl: './generic.component.html',
  styleUrls: ['./generic.component.css']
})
export class GenericComponent implements OnInit{
  
  //Crea un vettore di tipo Emoji e lo inizializza
  genVect : Emoji[]= [{name:"", emoji:""}]; 

  //Riceve l'oggetto ActivatedRoute come dependency injection
  constructor(private route: ActivatedRoute) {
    //Gestisce i cambi di route con l'observable paramMap
    this.route.paramMap.subscribe(this.getRouterParam);
  }
  
  ngOnInit(): void {
  }

  //Ogni volta che viene invocata la route tracks/:id, 
  //l'observable paramMap richiama questo metodo
  getRouterParam = (params: ParamMap) =>
  {
    let uri_param = params.get('id'); //Ottengo l'id dalla ParamMap
    console.log (uri_param); //Stampo su console
    //this.service.getTrack() 
    if (uri_param == 'fruits') this.genVect = fruits;
    if (uri_param == 'animals') this.genVect = animals;

  }

}