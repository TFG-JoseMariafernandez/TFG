export interface Type {
    name:string,
    description:string,
    ordered:Boolean
}
export interface Variables {
    name: string,
    type:string,
    description:string,
    domain:string,
  domain_units:string,
    units:string,
    types:Type[]
  
   
  }
  