import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import {Variables,Type}from '../models/variables'
import {Context}from '../models/context'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';



@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  public Editor = ClassicEditor;
  

  T:Type[]  =[ {
    name : '',
    description:'',
    ordered: false,
    
    }];
  
  variables: Variables[] = [{
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    domain_units:"",
    types: this.T,

  }];
  
  domains  = [
    {value: 'One_of', viewValue: 'One of'},
    {value: 'Of_type', viewValue: 'of type'},
    
  ];
  varActual : Variables | undefined ;

  error:Boolean | undefined;
  
  errorMen:String | undefined;
  contadorRep:number = 0;

  
  
  
   
 
  
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
    domain_units:"",
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
    ordered:false,
   
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
    for (let i = 0; i < this.variables.length; i++) {
      for (let j = 0; j < this.variables.length; j++) {
      
        if(i != j){
        if(this.variables[i].name == this.variables[j].name){
        this.errorMen ='El nombre de las variables estan repetidos';
        this.error= true;
        this.contadorRep ++;
        console.log(this.contadorRep)
      }
      }
      }
    }
    if(this.contadorRep == 0) {
      this.error = false;
      this.guarda = variables;
    
      this.enviar.emit(this.guarda); 
  }
  this.contadorRep = 0;
 
    
    
    

    
  }
}
