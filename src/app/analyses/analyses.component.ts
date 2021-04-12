import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import {Analyses_table,Analyses,Data_Spec,Having,VarGroupArray}from '../models/analyses'
import { Desing,Design_Parameters,Group,Protocol, Setting } from '../models/design';
import {Variables,Type}from '../models/variables'
@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {
  T:Type[]  =[ {
    name : '',
    description:'',
    ordered:false
    
    }];
  varOf: Variables[] =[{
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    domain_units:"",
    types: this.T,

  }];
  varGroupArray: VarGroupArray = {
    name:'',

     
    }
  
having: Having[] =  [{
 

    var:this.varGroupArray,
    operator:'',
    value:'',
    
    
     
    }]
  data_spect: Data_Spec =  {
    of_variable:[],
    of_group:[],
    by_variable:[],
    by_group:[],
   having:[]
  
   
  } 
  analyses_table :Analyses_table[]= [{
    id: '',
    analyses_type:'',
    test:'',
    alpha:'',
    data_spec:this.data_spect,
  
   
  }];
   analyses:Analyses[] =[  {
    name:'',
    table: this.analyses_table
    
}   ]
 
  contador_of= 0;
  contador_By= 0;
  contador_of_g= 0;
  contador_By_g= 0;
  contador_Having= 0;
  @Output()
  enviar: EventEmitter<Analyses[]> = new EventEmitter<Analyses[]>();
  selectedVar: Analyses | undefined;
  guarda!: Analyses[]
  @Input()
  Groups : Group[] | undefined
  @Input()
  Variables : Variables[] | undefined
  

  

  error:Boolean | undefined;
  
  errorMen:String | undefined;
  contadorRep:number = 0;
  group_Var: string | undefined;


  constructor() { }
  

  ngOnInit(): void {

  }


  valorvariable(NameVari:string , value:any){
    const vari = this.Variables?.find(x => x.name == NameVari);
    console.log(vari)
   
    var bol: boolean = false
    const regex = /^[0-9]*$/;
  
    if(vari?.domain == "Of_type"){
     
      if(vari?.domain_units == "Integer"){
        
       bol= regex.test(value);
 
      } if(vari?.domain_units == "Float"){
        console.log('enytra en float')
       
        var valor = parseFloat(value);
       if( valor ){
       bol=true
     }
 
   
 
      } if(vari?.domain_units == "Boolean"){
       console.log('enytra en boolean')
        
       if ( value == 'true' || value == 'false'){
         bol = true
       }
 
      } if(vari?.domain_units == "String"){
        
       bol= true;
 
      }
 
     
     
    }if(vari?.domain == "One_of" ){
 
      for (let index = 0; index < vari?.types.length; index++) {
        const element = vari?.types[index];
  
 
        if(element.name == value){
 
        bol =true
       
      
      }
     }
    }
  }


  agregarAnalyses(){
    const AnalysessFormGroup  = ({
      name: '',
      table:[]
  
    });


    this.analyses.push(AnalysessFormGroup);

    

    
  }
  
  agregarTable(indice: number){
    const analyses = this.analyses[indice];
    const dataFormGroup  = ({
      of_variable: [],
      of_group:[],
      by_variable:[],
      by_group:[],
     having :[]
    
     
   
    });
    const analysesFormGroup  = ({
      id: '',
      analyses_type:'',
      test:'',
      alpha:'',
      data_spec:dataFormGroup,
    
     
   
    });
    analyses.table.push(analysesFormGroup);  
   
    
  }
  agregarOfGroups(indice: number , indice_table :number){
    const des = this.analyses[indice];
    
    const var_of ={
      name:''
    } 
    
   des.table[indice_table].data_spec.of_variable.push(var_of)
   console.log(des)
    this.contador_of++
   
    
  }
  agregarOfVars(indice: number , indice_table :number){
    const des = this.analyses[indice];
    
    const var_of ={
      name:''
    } 
    

    
   des.table[indice_table].data_spec.of_variable.push(var_of)

    this.contador_of++
   
    
  }
  agregarByVars(indice: number , indice_table :number){
    const des = this.analyses[indice];
    
    const var_of ={
      name:''
    } 
    
    
   des.table[indice_table].data_spec.by_variable.push(var_of)
    this.contador_By++
   
    
  }
  agregarOfGroup(indice: number , indice_table :number){
    const des = this.analyses[indice];
    
    const var_of ={
      name:''
    } 
    

    
   des.table[indice_table].data_spec.of_group.push(var_of)

    this.contador_of_g++
   
    
  }
  agregarByGroup(indice: number , indice_table :number){
    const des = this.analyses[indice];
    
    const var_of ={
      name:''
    } 
    
    
   des.table[indice_table].data_spec.by_group.push(var_of)
    this.contador_By_g++
   
    
  }
  agregarHaving(indice: number , indice_table :number){
    const des = this.analyses[indice];
    
     const var_of = {
      name:''
    } 
    const HavingFormGroup  = ({
      var:var_of,
      operator:'',
      value:'',

    });
   
   
    
   des.table[indice_table].data_spec.having.push(HavingFormGroup)

    this.contador_Having++
   
    
  }
  removerOfVars(indiceDes: number , indicevars : number, indice_table:number) {
    const vars = this.analyses[indiceDes];
    this.contador_of --
    
    vars.table[indice_table].data_spec.of_variable.splice(indicevars,1)
  }
  removerByVars(indiceDes: number , indicevars : number, indice_table:number) {
    const vars = this.analyses[indiceDes];
    this.contador_By --
   
    vars.table[indice_table].data_spec.by_variable.splice(indicevars,1)
  }
  removerOfGroup(indiceDes: number , indicevars : number, indice_table:number) {
    const vars = this.analyses[indiceDes];
    this.contador_of_g --
   
    vars.table[indice_table].data_spec.of_group.splice(indicevars,1)
  }
  removerByGroup(indiceDes: number , indicevars : number, indice_table:number) {
    const vars = this.analyses[indiceDes];
    this.contador_By_g --

    vars.table[indice_table].data_spec.by_group.splice(indicevars,1)
  }
  removerHaving(indiceDes: number , indicevars : number, indice_table:number) {
    const vars = this.analyses[indiceDes];
    this.contador_Having --
    console.log( vars.table[indice_table])
    vars.table[indice_table].data_spec.having.splice(indicevars,1)
  }
  removerTables(indiceVar: number , indiceType : number) {
    const analyses = this.analyses[indiceVar];

    analyses.table.splice(indiceType,1)
  }
  removerAnalyses(indice: number) {

    this.analyses.splice(indice,1)
  }

  guardar(analyses: Analyses[]): void {
    for (let i = 0; i < this.analyses.length; i++) {
      for (let j = 0; j < this.analyses.length; j++) {
      
        if(i != j){
        if(this.analyses[i].name == this.analyses[j].name){
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
      this.guarda = analyses;
    
      this.enviar.emit(this.guarda); 
  }
  this.contadorRep = 0;
 
   
    

    
  }
}
