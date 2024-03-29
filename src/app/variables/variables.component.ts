import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import {Variables,Type}from '../models/variables'
import {Context}from '../models/context'
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { Variable } from '@angular/compiler/src/render3/r3_ast';
import * as $ from 'jquery';



@Component({
  selector: 'app-variables',
  templateUrl: './variables.component.html',
  styleUrls: ['./variables.component.css']
})
export class VariablesComponent implements OnInit {
  public Editor = ClassicEditor;
  

  T:Type[]  =[ ];
  
  variables: Variables[] = [];
  

  varActual : Variables | undefined ;

  error:Boolean | undefined;
  
  errorMen:String | undefined;
  contadorRep:number = 0;
  names:string[] = []

  
  
  
   
 
  
  @Output()
  enviar: EventEmitter<Variables[]> = new EventEmitter<Variables[]>();
  @Output()
  change: EventEmitter<String[]> = new EventEmitter<String[]>();
  selectedVar: Variables | undefined;
  guarda!: Variables[]


  

 


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
    ordered: false,
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
    this.names = []
    


    for (let i = 0; i < variables.length; i++) {

      var element = variables[i];
      
   
      if(!element.name   ){
        this.error = true
        this.errorMen ='El nombre de alguna variable esta vacio';
      }else if( !element.type  || element.type == ""  ){
        this.error = true
        this.errorMen ='El tipo de alguna variable esta vacio';
      }else  if( (!element.domain || element.domain == " " || element.domain == ""  ) && element.type != "OutCome" ){
     
        this.error = true
        this.errorMen ='El domain de alguna variable esta vacio';
      }else{
        this.error = false
      }

      if(element.domain == 'Of_type'){
        element.types = []
        element.ordered = false
        
      }else if (element.domain == 'One_of'){
        element.domain_units = ''
      
      } if (element.type == "OutCome"){
        element.description = ''
        element.domain = ''
        element.domain_units = ''
        element.ordered = false
        element.types = []
        element.units = ''
  

      }

      for (let j = 0; j < variables.length; j++) {
      
        if(i != j){
        if(this.variables[i].name == this.variables[j].name){
        this.errorMen ='El nombre de las variables estan repetidos';
        this.error= true;
        this.contadorRep ++;
      
      }
      }
      
      }
     
    }
 

    if(this.contadorRep == 0 && !this.error) {
      for (let c = 0; c < variables.length; c++) {
        const element = this.variables[c];
        this.names.push(element.name)

        
      }
     
      this.error = false;
      this.guarda = variables;
      
      this.enviar.emit(this.guarda); 
  }
  this.contadorRep = 0;
 
    
    
    

    
  }

  cambios(newName:string, old:number) {
 var envioCambios:string[] =[];


envioCambios.push(newName)
envioCambios.push(this.names[old])





 this.change.emit(envioCambios)


  
    
  }
  
}
