import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import {Variables,Type}from '../models/variables'
import {Context}from '../models/context'



@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  T:Type[]  =[ {
    name : '',
    description:'',
    unit:''
    
    }];
  
  variables: Variables[] = [{
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    types: this.T,

  }];
  
  domains  = [
    {value: 'One_of ', viewValue: 'One of'},
    {value: 'Of_type', viewValue: 'of type'},
    
  ];
  varActual : Variables | undefined ;


  
  
  
   
 
  
  @Output()
  enviar: EventEmitter<Variables[]> = new EventEmitter<Variables[]>();
  selectedVar: Variables | undefined;
  guarda!: Variables[]
  @Input() Contexto: Context | undefined;

  

 


  constructor() { }
  

  ngOnInit(): void {

  }




  agregarVariable(){
    const variablessFormGroup  = ({
      name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    types:[],
    });

this.varActual = variablessFormGroup;
    this.variables.push(variablessFormGroup);

    

    
  }
  
  agregarType(indice: number){
    const vars = this.variables[indice];
   
    const typeFormGroup  = ({
      name: '',
    description: ' ',
    unit:'',
   
    });
    vars.types.push(typeFormGroup);  
   
    
  }
  removerType(indiceVar: number , indiceType : number) {
    const vars = this.variables[indiceVar];

    vars.types.splice(indiceType,1)
  }
  removerVariables(indice: number) {

    this.variables.splice(indice,1)
  }

  guardar(variables: Variables[]): void {
 
    this.guarda = variables;
    
    this.enviar.emit(this.guarda); 
    
    

    
  }
}
