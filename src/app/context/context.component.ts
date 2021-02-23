
import { Context,Absctract,Goal, Experimenters } from '../models/context';
import { Variables } from '../models/variables';
import { CONTEXTS } from '../contexts';
import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-context',
  templateUrl: './context.component.html',
  styleUrls: ['./context.component.css']
})
export class ContextComponent implements OnInit {
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
  
  @Output()
  enviar: EventEmitter<Context> = new EventEmitter<Context>();
  selectedCon: Context | undefined;
  guarda!: Context;
  @Input() Variable: Variables[] | undefined;
 

  



  constructor() { }

  ngOnInit() {
  }

  onSelect(context: Context): void {
    this.selectedCon = context;
   
    
    
  }
  guardar(context: Context): void {
 
    this.guarda = context;
    
    this.enviar.emit(this.guarda); 
    
    

    
  }
  agregarExperimenters(){
    const ExperimentersFormGroup  = ({
      name: '',
      email: '',
      organization: '',
      rol: '',
      task: ''
    });

    this.experimenters.push(ExperimentersFormGroup);
  }
  removerExperimenters(indice: number) {

    this.experimenters.splice(indice,1)
  }

  

  
  

}