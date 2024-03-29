import { Expression } from "@angular/compiler";
import { Variables } from "./variables";


export interface Design_Parameters {
    name:string,
    value:string,
    description:string,
    measure_in:string
}
export interface Group {
    name:string,
    size:string,
   
}
export interface Setting {
    varName :string,
    varValue:string,
    varOutcome:string

}

export interface Protocol {
    name:string,
    type:string,
    onGroup:Group,
    settings:Setting[]

   
}
export interface Bloqvars {
    name:string,
   

   
}


export interface Desing {
    design: string,
    description:string,
    design_parameters :Design_Parameters[],
    random_assignment:boolean,
    description_assignmentMethod:string,
    BloquingVars:Bloqvars[],
    groups:Group[],
    protocols:Protocol[]
  
   
  }
 