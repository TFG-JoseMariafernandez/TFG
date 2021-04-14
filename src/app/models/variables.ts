export interface Type {
    name:string,
    description:string,
    
}
export interface Variables {
    name: string,
    type:string,
    description:string,
    domain:string,
  domain_units:string,
    units:string,
    ordered:Boolean
    types:Type[]
  
   
  }
  