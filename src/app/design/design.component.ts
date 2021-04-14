
import { Design_Parameters,Setting, Desing, Group, Protocol} from '../models/design';
import { Component, OnInit, EventEmitter, Output , Input } from '@angular/core';
import {Variables,Type}from '../models/variables'


import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { variable } from '@angular/compiler/src/output/output_ast';


@Component({
  selector: 'app-design',
  templateUrl: './design.component.html',
  styleUrls: ['./design.component.css']
})
export class DesignComponent implements OnInit {
  public Editor = ClassicEditor;

  @Output()
  enviar: EventEmitter<Desing[]> = new EventEmitter<Desing[]>();
  selectedCon: Desing | undefined;
  guarda!: Desing[];
  @Input()
  Variables: Variables[] | undefined ;
  @Input()
  Variable_Outcome: Variables[] | undefined ;

  DesignActual:Desing | undefined;
  random:boolean = false;
  contador:number = 0;
 

  constructor() { }

  ngOnInit(): void {
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
  comprobacion: boolean = true ;
  errorMen:String | undefined;
  error : boolean = false;


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



this.comprobacion = bol;
console.log(this.comprobacion)

return bol;

 }
 random_ass(re:boolean){
   var res = String(re)


   if(res  == 'true'){

     return true
   }else if(res == 'false' ){

     return false
   }else{
     return false
   }

 }

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
    varOutcome:"",
   
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
    
    const var_of ={
      name:''
    } 
    
    
   des.BloquingVars.push(var_of)
   
     
    
 
    this.contador++
   
    
  }
  borrarBV(va:String){
    console.log('èntra')
    const vari = this.Variables?.find(x => x.name == va)!;
    var i = this.Variables?.indexOf(vari)!;
   
    this.Variables?.splice( i,1)
    return true

  }
  removerVars(indiceDes: number , indicevars : number) {
    const vars = this.Desing[indiceDes];
    this.contador --
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
    console.log(this.comprobacion)
    for (let index = 0; index < design.length; index++) {
      const element = design[index];
      if(element.design != 'Custom'){
        element.BloquingVars = []
        element.protocols = []
        element.groups = []
      }
     
      if ( !element.design || element.design == " "){
        this.errorMen ='El design del Design  esta vacio';
          this.error= true;
      }else{
        this.error = false
      }

      
    }
    if(this.comprobacion && !this.error){
 
    this.guarda = design;
    console.log(this.guarda)
    
    this.enviar.emit(this.guarda); 
    
  }else{
    this.errorMen = 'EL valor de la variable no es coherente con su dominio'
  }

    
  }
  
}
