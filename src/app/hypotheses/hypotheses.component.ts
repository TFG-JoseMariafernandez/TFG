import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import { Hypotheses } from '../models/hypotheses';
import {Variables,Type}from '../models/variables'

@Component({
  selector: 'app-hypotheses',
  templateUrl: './hypotheses.component.html',
  styleUrls: ['./hypotheses.component.css']
})
export class HypothesesComponent implements OnInit {
  @Output()
  enviar: EventEmitter<Hypotheses[]> = new EventEmitter<Hypotheses[]>();
  selectedCon: Hypotheses | undefined;
  guarda!: Hypotheses[];
  @Input()
  Variable: Variables[] | undefined;

  T:Type[]  =[ {
    name : '',
    description:'',
    unit:''
    
    }];

  var: Variables ={
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    types: this.T,

  };
 

  hypotheses: Hypotheses[] = [{    
    name: '',
    type: ' ',
    description:' ',
    variable: this.var, 

  }];


  

  

 

  



  constructor() { }

  ngOnInit() {
   

   
  
    console.log(this.Variable)
  }

  onSelect(context: Hypotheses): void {
    this.selectedCon = context;
   
    
    
  }
  guardar(hypotheses: Hypotheses[]): void {
 
    this.guarda = hypotheses;
    console.log(this.guarda)
    this.enviar.emit(this.guarda); 
    
    

    
  }
  agregarHypotheses(){
    const variableFormGroup  = ({
      name: '',
    type: ' ',
    description:' ',
    variable: this.var
    
    });

    this.hypotheses.push(variableFormGroup);
  }
  removerHypotheses(indice: number) {

    this.hypotheses.splice(indice,1)
  }

  

  
  

}