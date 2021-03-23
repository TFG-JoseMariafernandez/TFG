import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import {Analyses_table,Analyses}from '../models/analyses'
@Component({
  selector: 'app-analyses',
  templateUrl: './analyses.component.html',
  styleUrls: ['./analyses.component.css']
})
export class AnalysesComponent implements OnInit {
   analyses_table :Analyses_table[]= [{
    id: '',
    analyses_type:'',
    details:'',
    data_spec:'',
  
   
  }];
   analyses:Analyses[] =[  {
    name:'',
    table: this.analyses_table
    
}   ]
 
  
  @Output()
  enviar: EventEmitter<Analyses[]> = new EventEmitter<Analyses[]>();
  selectedVar: Analyses | undefined;
  guarda!: Analyses[]
  

  

  error:Boolean | undefined;
  
  errorMen:String | undefined;
  contadorRep:number = 0;
 


  constructor() { }
  

  ngOnInit(): void {

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
   
    const analysesFormGroup  = ({
      id: '',
      analyses_type:'',
      details:'',
      data_spec:'',
    
     
   
    });
    analyses.table.push(analysesFormGroup);  
   
    
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
