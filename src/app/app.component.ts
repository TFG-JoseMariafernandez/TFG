import { stringify } from '@angular/compiler/src/util';
import { Component } from '@angular/core';
import { Context, Experimenters } from '../app/models/context';
import { CONTEXTS } from './contexts';
import { Hypotheses } from './models/hypotheses';
import {Variables}from './models/variables'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'TFG';
  Var:string | undefined;
  VarFinal : JSON | undefined;
hypothesesFinal : JSON | undefined;
  ContextEnviado:Context | undefined;
  VariableEnviado: Variables[] | undefined;
HypothesesEnviado:Hypotheses[] | undefined;
  vercontext: string | undefined;
  vercontextFinal:JSON | undefined;
  expermienters = '';
  VariableEnviadoDes:Variables[] | undefined;
  
  
  recibirContext(mensaje: Context) {
    this.ContextEnviado = mensaje;
  
    console.log();
    
    this.vercontextFinal = JSON.parse(JSON.stringify(mensaje));
    
  }

  recibirVariable(mensaje:Variables[]){
    const varValidas = []
    
    for (let index = 0; index < mensaje.length; index++) {
     if(mensaje[index].type == "OutCome"){
      varValidas.push(mensaje[index])
      console.log(varValidas )
      }
     
      
    }
    this.VariableEnviado = varValidas;
   this.VariableEnviadoDes = mensaje;
    
    
    this.VarFinal = JSON.parse(JSON.stringify(mensaje));
  


}
recibirHypotheses(mensaje:Hypotheses[]){
  this.HypothesesEnviado = mensaje;
  console.log(this.hypothesesFinal)
  
  this.hypothesesFinal = JSON.parse(JSON.stringify(mensaje));
  console.log(this.hypothesesFinal)


}

}


