import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Goal, Experimenters } from '../models/context';

import { ContextComponent } from './context.component';


describe('ContextComponent', () => {
 let context : ContextComponent
 beforeEach(async(() => {
  TestBed.configureTestingModule({
   
    declarations: [ ContextComponent ],
    providers: []
  })
  .compileComponents();

  TestBed.configureTestingModule({
    declarations : [ ContextComponent]
  }).createComponent(ContextComponent)
}));




  it('Prubea test uno', () => {
    let context = TestBed.createComponent(ContextComponent);
(<HTMLInputElement> document.getElementById('Context1')).value= 'prueba';
(<HTMLInputElement> document.getElementById('absctract.Goal')).value= 'prueba';
(<HTMLInputElement> document.getElementById('absctract.Method')).value= 'prueba';
(<HTMLInputElement> document.getElementById('absctract.Result')).value= 'prueba';
(<HTMLInputElement> document.getElementById('absctract.Conclusions')).value= 'prueba';
document.getElementById('guardar')?.click();
document.getElementById('agregarExperimenters')?.click();

console.log('aqui')
console.log(context)

 
  });
});
