import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Context, Experimenters,Absctract,Goal } from '../app/models/context';
import { CONTEXTS } from './contexts';
import { Analyses, Analyses_table,Data_Spec,Having,VarGroupArray } from './models/analyses';
import { Desing,Design_Parameters,Group,Protocol, Setting } from './models/design';
import { Hypotheses } from './models/hypotheses';
import {Variables,Type}from './models/variables'
import {Experimento}from './models/experimento'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFG';
// componente padre (vacio)

absctract: Absctract = {
    
  Context: '',
  Goal: ' ',
  Method:' ',
  Conclusions: '',
  Result:''

};
goal:Goal = {
analyce:'',
  purpose_of: '',
  respect_to: '' ,
  point_of_view: '',
  context_of:''


};
experimenters:Experimenters[] = [{
  name: '',
email:'',
organization:'',
rol:'',
task:''
  
  }];
context : Context = {
  Absatract : this.absctract,
  Goal: this.goal,
  Experimenters : this.experimenters,
}
T:Type[]  =[ {
  name : '',
  description:'',

  
  }];

var: Variables[] =[{
  
  name: '',
  description: ' ',
  domain:' ',
  type: '',
  units:'',
  domain_units:"",
  ordered:false,
  types: this.T,

}];
va: Variables ={
  
  name: '',
  description: ' ',
  domain:' ',
  type: '',
  units:'',
  domain_units:"",
  ordered:false,
  types: this.T,

};

Design_Parameters: Design_Parameters[] =  [{
  name:"",
  value:"",
  description:"",
  measure_in:""
}]
Group:Group[] =  [{
  name:"",
  size:"",
 
}];

g:Group = {
  name:"",
  size:"",
 
};
settings: Setting[] = [ {
  varName:"",
  varValue:"",
  varOutcome:""
 

}];
 Protocol: Protocol[] = [ {
    name:"",
    type:"",
    onGroup:this.g,
    settings: this.settings


}];
Desing : Desing[] =  [{
  design: '',
  description:'',
  design_parameters :this.Design_Parameters,
  random_assignment:false,
  description_assignmentMethod:'',
  BloquingVars:[],
  groups:this.Group,
  protocols:this.Protocol

 
}]
THyp:Type[]  =[ {
  name : '',
  description:'',

  
  }];

varEx: Variables ={
  
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
  variable: '', 
  variable_outcome: '',

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
  of_variable: [],
  of_group:[],
  by_variable:[],
  by_group:[],
 having:this.having


 
} 
analyses_table :Analyses_table[]= [{
  id: '',
  analyses_type:'',
  test:'',
  alpha:"",
  data_spec:this.data_spect,

 
}];
 analyses:Analyses[] =[  {
  name:'',
  table: this.analyses_table
  
}   ]

experimento:Experimento = {
  context: this.context,
  analyses:this.analyses,
  design:this.Desing,
  hypotheses:this.hypotheses,
  variables:this.var

}

  
  // Componentes Finales
  VarFinal : JSON | undefined;
hypothesesFinal : JSON | undefined;
designsFinal : JSON | undefined;
analysesFinal : JSON | undefined;
vercontextFinal:JSON | undefined;
experimentoFinal: JSON | undefined;

//Componentes enviados a hijos
GroupsEnviados : Group[] | undefined

ContextEnviado:Context | undefined;
  VariableEnviado: Variables[] | undefined;
  VariableOutcomeEnviado: Variables[] | undefined;
HypothesesEnviado:Hypotheses[] | undefined;
AnalysesEnviado:Analyses[] | undefined;
DesignsEnviado:Desing[] | undefined;
VariableEnviadoDes:Variables[] | undefined;
VariableEnviadoOrdered:Variables[] | undefined;
VariableEnviadoOneOf:Variables[] | undefined;




  
changeVariable(newname:String[]){

  var oldname = newname[1];
  var newnameStr = newname[0]
  if(newnameStr){
  
  //actualizacion en analisis
  for (let index = 0; index < this.experimento.analyses.length; index++) {
    const element = this.experimento.analyses[index];

    for (let j = 0; j < element.table.length; j++) {
      const tab = element.table[j];
      for (let i = 0; i < tab.data_spec.of_variable.length; i++) {
        const of = tab.data_spec.of_variable[i];
        if(of.name == oldname){
         
          of.name = newnameStr.toString();
         

        }
        
      }
      for (let i = 0; i < tab.data_spec.by_variable.length; i++) {
        const by = tab.data_spec.by_variable[i];
        if(by.name == oldname){
         
          by.name = newnameStr.toString();
         

        }
        for (let i = 0; i < tab.data_spec.having.length; i++) {
          const hv = tab.data_spec.having[i];
          if(hv.var.name == oldname){
           
            hv.var.name = newnameStr.toString();
           
  
          }
        
      }
      
    }
    
  }

//actualiozacion de hipotesis
console.log('principio      ' + newnameStr)
  


 } for (let index = 0; index < this.experimento.hypotheses.length; index++) {
  
   const element = this.experimento.hypotheses[index];

   console.log(element.variable_outcome)
   if(element.variable == oldname){
           
    element.variable = newnameStr.toString();
   

  }if(element.variable_outcome == oldname){
  
           
    element.variable_outcome = newnameStr.toString();
   

  }
   
 }//actualizacion de design

 for (let index = 0; index <this.experimento.design.length; index++) {

   const element =  this.experimento.design[index];
  for (let b = 0; b < element.BloquingVars.length; b++) {
    const bv = element.BloquingVars[b];
    if(bv.name == oldname){
           
     bv.name = newnameStr.toString();
     
  
    }
  
    
  }
  for (let p = 0; p < element.protocols.length; p++) {
    const pro = element.protocols[p];
    for (let v = 0; v < pro.settings.length; v++) {
      const va = pro.settings[v];
      if(va.varName == oldname){
           
        va.varName = newnameStr.toString();
        
     
       } if(va.varOutcome == oldname){
           
        va.varOutcome = newnameStr.toString();
        
     
       }
      
    }
    
  }
   
 }
}
this.experimentoFinal =  JSON.parse(JSON.stringify(this.experimento));
}
  
  
  recibirContext(mensaje: Context) {
    this.ContextEnviado = mensaje;
  

    
    this.vercontextFinal = JSON.parse(JSON.stringify(mensaje));
    this.experimento.context = mensaje;
    this.experimentoFinal =  JSON.parse(JSON.stringify(this.experimento));
    
  }
  
 

  recibirVariable(mensaje:Variables[]){
    const varValidas = []
    const varValidasOutcome = []
    const varValidaOrdered = []
    const varValidaOneOf = []

  
    for (let index = 0; index < mensaje.length; index++) {
      
     
      if (mensaje[index].domain == 'One_of'){
        varValidaOneOf.push(mensaje[index])
      }
      if(mensaje[index].ordered){
        varValidaOrdered.push(mensaje[index])

      }
      
     if(mensaje[index].type != "OutCome"){
      varValidas.push(mensaje[index])
  
      }else{
    varValidasOutcome.push(mensaje[index])
  }
    }
    this.VariableEnviadoOneOf = varValidaOneOf;
    this.VariableEnviadoOrdered = varValidaOrdered;
    this.VariableEnviado = varValidas;
    this.VariableOutcomeEnviado = varValidasOutcome;
   this.VariableEnviadoDes = mensaje;
    
    
    this.VarFinal = JSON.parse(JSON.stringify(mensaje));
    this.experimento.variables = mensaje;
    this.experimentoFinal =  JSON.parse(JSON.stringify(this.experimento));
  


}
recibirHypotheses(mensaje:Hypotheses[]){
  this.HypothesesEnviado = mensaje;

  
  this.hypothesesFinal = JSON.parse(JSON.stringify(mensaje));
  this.experimento.hypotheses = mensaje;
  this.experimentoFinal =  JSON.parse(JSON.stringify(this.experimento));



}
recibirAnalyses(mensaje:Analyses[]){
  this.AnalysesEnviado = mensaje;

  
  this.analysesFinal = JSON.parse(JSON.stringify(mensaje));
  this.experimento.analyses = mensaje;
  this.experimentoFinal =  JSON.parse(JSON.stringify(this.experimento));



}
recibirDesign(mensaje:Desing[]){
  var desigfinal = []
  this.DesignsEnviado = mensaje;
  var group_env=[];
  for (let index = 0; index < mensaje.length; index++) {
   
    for (let j = 0; j < mensaje[index].groups.length; j++) {
      const element = mensaje[index].groups[j];
      
      group_env.push(element)
    

      
    }
    
  }
  this.GroupsEnviados = group_env;

  
  this.designsFinal = JSON.parse(JSON.stringify(mensaje));
  this.experimento.design = mensaje;
  this.experimentoFinal =  JSON.parse(JSON.stringify(this.experimento));
  desigfinal.push(mensaje);
  


}





}


