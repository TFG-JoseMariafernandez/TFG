export interface Absctract {
  Context: string,
  Goal: string ,
  Method: string,
  Result:string,
  Conclusions:string
}
export interface Goal {
  analyce: string,
  purpose_of: string,
  respect_to: string ,
  point_of_view: string,
  context_of:string,

}
export interface Experimenters {
  name: string,
  email:string,
  organization:string,
  rol:string,
  task:string

 
}
export interface Context {
    
    Absatract: Absctract,
    Goal : Goal,
    Experimenters : Experimenters[],
    
  }


