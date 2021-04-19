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
  BloquingVars:this.var,
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
  variable: this.varEx, 
  variable_outcome: this.varEx,

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
      console.log(element)
      group_env.push(element)
      console.log(group_env)

      
    }
    
  }
  this.GroupsEnviados = group_env;
console.log(this.GroupsEnviados)
  
  this.designsFinal = JSON.parse(JSON.stringify(mensaje));
  this.experimento.design = mensaje;
  this.experimentoFinal =  JSON.parse(JSON.stringify(this.experimento));
  desigfinal.push(mensaje);
  


}





}


