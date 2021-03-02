
export interface Analyses_table {
    id: string,
    analyses_type:string,
    details:string,
    data_spec:string,
  
   
  }
  export interface Analyses {
    name:string,
    table: Analyses_table[]
    
}


  