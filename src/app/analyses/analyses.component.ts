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
 
    this.guarda = analyses ;
    console.log(this.guarda)
    
    this.enviar.emit(this.guarda); 
    
    

    
  }
}
