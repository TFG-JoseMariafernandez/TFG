export interface Type {
    name:string,
    description:string,
    unit:string
}
export interface Variables {
    name: string,
    type:string,
    description:string,
    domain:string,
    units:string,
    types:Type[]
  
   
  }
  