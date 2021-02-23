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
export interface Protocol {
    name:string,
    type:string,
//TODO:AÑADIR LA PARTE DE 
   
}

export interface Desing {
    design: string,
    description:string,
    design_parameters :Design_Parameters[],
    random_assignment:string,
    description_assignmentMethod:string,
    BloquingVars:Variables[],
    groups:Group[],
    protocols:Protocol[]
  
   
  }
 