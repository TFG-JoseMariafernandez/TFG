import { Variables } from "./variables";


export interface VarGroupArray {
 

  name:string
  
  
   
  }


export interface Having {
 

var:VarGroupArray,
operator:string,
value:string,


 
}

export interface Data_Spec {
  of_variable: VarGroupArray[],
  of_group:VarGroupArray[],
  by_variable:VarGroupArray[],
  by_group:VarGroupArray[],
  having : Having[]


 
}
export interface Analyses_table {
    id: string,
    analyses_type:string,
    test:string,
    alpha:string,
    data_spec:Data_Spec,
  
   
  }
  export interface Analyses {
    name:string,
    table: Analyses_table[]
    
}
