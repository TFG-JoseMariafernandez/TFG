import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import { Hypotheses } from '../models/hypotheses';
import {Variables,Type}from '../models/variables'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-hypotheses',
  templateUrl: './hypotheses.component.html',
  styleUrls: ['./hypotheses.component.css']
})
export class HypothesesComponent implements OnInit {
  public Editor = ClassicEditor;

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
  
    
    }];

  var: Variables ={
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    domain_units:"",
    ordered:false,
    types: this.T,

  };
 

  hypotheses: Hypotheses[] = [{    
    name: '',
    type: ' ',
    description:' ',
    variable_outcome: '', 
    variable: '', 

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
      var element = this.hypotheses[i]
      if(!element.name || element.name == ""){
        this.errorMen ='El nombre de las hipotesis esta vacio';
          this.error= true;
      }else if ( !element.type || element.type == " "){
        this.errorMen ='El tipo de las hipotesis esta vacio';
          this.error= true;
      }else{
        this.error = false
      }
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
    variable:'',
    variable_outcome: '', 
    
    });

    this.hypotheses.push(variableFormGroup);
  }
  removerHypotheses(indice: number) {

    this.hypotheses.splice(indice,1)
  }

  

  
  

}