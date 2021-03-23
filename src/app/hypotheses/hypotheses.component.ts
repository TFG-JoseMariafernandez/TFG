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
  @Input()
  Variable_Outcome: Variables[] | undefined;

  T:Type[]  =[ {
    name : '',
    description:'',
    ordered:false
    
    }];

  var: Variables ={
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    domain_units:"",
    types: this.T,

  };
 

  hypotheses: Hypotheses[] = [{    
    name: '',
    type: ' ',
    description:' ',
    variable_outcome: this.var, 
    variable: this.var, 

  }];

  error:Boolean | undefined;
  
  errorMen:String | undefined;
  contadorRep:number = 0;

  
  constructor() { }

  ngOnInit() {
   

   
  
    console.log(this.Variable)
  }

  onSelect(context: Hypotheses): void {
    this.selectedCon = context;
   
    
    
  }
  guardar(hypotheses: Hypotheses[]): void {
    for (let i = 0; i < this.hypotheses.length; i++) {
      for (let j = 0; j < this.hypotheses.length; j++) {
        if(i != j){
          if(this.hypotheses[i].name == this.hypotheses[j].name){
          this.errorMen ='El nombre de las hipotesis estan repetidos';
          this.error= true;
          this.contadorRep ++;
         
        }
        }
        }
      }
      if(this.contadorRep == 0) {
 
        this.guarda = hypotheses;
        console.log(this.guarda)
        this.enviar.emit(this.guarda); 
        
    }
    this.contadorRep = 0;
   
      
      
 
    

    
  }
  agregarHypotheses(){
    const variableFormGroup  = ({
      name: '',
    type: ' ',
    description:' ',
    variable: this.var,
    variable_outcome: this.var, 
    
    });

    this.hypotheses.push(variableFormGroup);
  }
  removerHypotheses(indice: number) {

    this.hypotheses.splice(indice,1)
  }

  

  
  

}