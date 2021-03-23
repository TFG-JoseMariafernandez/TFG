
import { Design_Parameters,Setting, Desing, Group, Protocol} from '../models/design';
import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import {Variables,Type}from '../models/variables'
import { variable } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  @Output()
  enviar: EventEmitter<Desing[]> = new EventEmitter<Desing[]>();
  selectedCon: Desing | undefined;
  guarda!: Desing[];
  @Input()
  Variables: Variables[] | undefined ;

  DesignActual:Desing | undefined;
  random:boolean = false;
  contador:number = 0;
 

  constructor() { }

  ngOnInit(): void {
  }
  T:Type[]  =[ {
    name : '',
    description:'',
    ordered:false
    
    }];

  var: Variables[] =[{
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    domain_units:"",
    types: this.T,

  }];
  va: Variables ={
    
    name: '',
    description: ' ',
    domain:' ',
    type: '',
    units:'',
    domain_units:"",
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

 

  agregarDesign(){
    const DesignFormGroup  = ({
      design: '',
      description:'',
      design_parameters :[],
      random_assignment:false,
      description_assignmentMethod:'',
      BloquingVars:[],
      groups:[],
      protocols:[]
    });
  
console.log(DesignFormGroup)
this.DesignActual = DesignFormGroup;
    this.Desing.push(DesignFormGroup);

    

    
  }
  agregarParameters(indice: number){
    const des = this.Desing[indice];
   
    const ParametersFormGroup  = ({
      name:"",
      value:"",
      description:"",
      measure_in:""

    });
    des.design_parameters.push(ParametersFormGroup);  
   
    
  }
  
  agregarProtocol(indice: number){
    const des = this.Desing[indice];
   
    const ProtocolFormGroup  = ({
      name:"",
    type:"",
    onGroup: this.g,
   settings:[],

    });
    des.protocols.push(ProtocolFormGroup);  
   
    
  }
  agregarSetting(indice: number, indicePro: number  ){
    const pro = this.Desing[indice].protocols[indicePro];
   
    const setFormGroup  = ({
      varName:"",
    varValue:"",
   
    });
    pro.settings.push(setFormGroup);  
   
    
  }
  agregarGroups(indice: number ){
    const des = this.Desing[indice];
   
    const GroupsFormGroup  = ({
      name:"",
    size:"",
   
    });
    des.groups.push(GroupsFormGroup);  
   
    
  }
  agregarBloquingVars(indice: number){
    const des = this.Desing[indice];
    
   

    
    const v = this.va
    

    var variableFin = this.Variables?.find(element => element.name == v.name);
   
 
  
    des.BloquingVars.push(v);  
    this.contador++
   
    
  }
  removerVars(indiceDes: number , indicevars : number) {
    const vars = this.Desing[indiceDes];

    vars.BloquingVars.splice(indicevars,1)
  }
  removerGroup(indiceDes: number , indiceGroup : number) {
    const vars = this.Desing[indiceDes];

    vars.groups.splice(indiceGroup,1)
  }
  removerSetting(indiceDes: number , indicePro : number , indiceSet :number) {
    const vars = this.Desing[indiceDes].protocols[indicePro];

    vars.settings.splice(indiceSet,1)
  }
  removerProtocol(indiceDes: number , indiceProtocol : number) {
    const vars = this.Desing[indiceDes];

    vars.protocols.splice(indiceProtocol,1)
  }
  removerParameters(indiceDes: number , indicePara : number) {
    const vars = this.Desing[indiceDes];

    vars.design_parameters.splice(indicePara,1)
  }

  removerDesign(indice: number) {

    this.Desing.splice(indice,1)
  }

  guardar(design: Desing[]): void {
 
    this.guarda = design;
    console.log(this.guarda)
    
    this.enviar.emit(this.guarda); 
    
    

    
  }
  
}
