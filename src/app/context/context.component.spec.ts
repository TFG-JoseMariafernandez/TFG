import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';

import { ContextComponent } from './context.component';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';



describe('ContextComponent: input', () => {
  let component: ContextComponent;
  let fixture: ComponentFixture<ContextComponent>;
  let compiled: any;
  let heroService: any;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
      declarations: [ ContextComponent ],
      providers: [
        {
          provide: ActivatedRoute, useValue:
            { snapshot: { paramMap: convertToParamMap( { id: 19 } ) } }
        },
       
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
 
  });

  it('new context', async () => {
    //ABSTRACT
    const AbsatractName = (<HTMLInputElement> document.getElementById('Context1'));
    AbsatractName.value = 'Foo';
    AbsatractName.dispatchEvent(new Event('input'));
    const AbsatractGoal = (<HTMLInputElement> document.getElementById('absctract.Goal'));
    AbsatractGoal.value = 'Foo';
    AbsatractGoal.dispatchEvent(new Event('input'));
    const AbstraMethod = (<HTMLInputElement> document.getElementById('absctract.Method'));
    AbstraMethod.value = 'Foo';
    AbstraMethod.dispatchEvent(new Event('input'));
    const AbsatractRes = (<HTMLInputElement> document.getElementById('absctract.Result'));
    AbsatractRes.value = 'Foo';
    AbsatractRes.dispatchEvent(new Event('input'));
    const absctractCon = (<HTMLInputElement> document.getElementById('absctract.Conclusions'));
    absctractCon.value = 'Foo';
    absctractCon.dispatchEvent(new Event('input'));
    // GOAL
    const goalanalyce = (<HTMLInputElement> document.getElementById('goal.analyce'));
    goalanalyce.value = 'Foo';
    goalanalyce.dispatchEvent(new Event('input'));
    const purpose_of = (<HTMLInputElement> document.getElementById('goal.purpose_of'));
    purpose_of.value = 'Foo';
    purpose_of.dispatchEvent(new Event('input'));
    const respect_to = (<HTMLInputElement> document.getElementById('goal.respect_to'));
    respect_to.value = 'Foo';
    respect_to.dispatchEvent(new Event('input'));
    const point_of_view = (<HTMLInputElement> document.getElementById('goal.point_of_view'));
    point_of_view.value = 'Foo';
    point_of_view.dispatchEvent(new Event('input'));
    const context_of = (<HTMLInputElement> document.getElementById('goal.context_of'));
    context_of.value = 'Foo';
    context_of.dispatchEvent(new Event('input'));
   // experimenters: agregar uno 
   
  
    document.getElementById('agregarExperimenters')?.click();
    fixture.detectChanges();
 
    const Exname = (<HTMLInputElement> document.getElementById('experimenters.name'));
    Exname.value = 'Foo';
    Exname.dispatchEvent(new Event('input'));
    const email = (<HTMLInputElement> document.getElementById('experimenters.email'));
    email.value = 'Foo';
    email.dispatchEvent(new Event('input'));
    const organization = (<HTMLInputElement> document.getElementById('experimenters.organization'));
    organization.value = 'Foo';
    organization.dispatchEvent(new Event('input'));
    const rol = (<HTMLInputElement> document.getElementById('experimenters.rol'));
    rol.value = 'Foo';
    rol.dispatchEvent(new Event('input'));
    const task = (<HTMLInputElement> document.getElementById('experimenters.task'));
    task.value = 'Foo';
    task.dispatchEvent(new Event('input'));


 
    document.getElementById('guardar')?.click();
    fixture.detectChanges();
    expect(component.absctract.Context).toBe('Foo');
    expect(component.absctract.Goal).toBe('Foo');
    expect(component.absctract.Method).toBe('Foo');
    expect(component.absctract.Result).toBe('Foo');
    expect(component.absctract.Conclusions).toBe('Foo');

    expect(component.goal.analyce).toBe('Foo');
    expect(component.goal.context_of).toBe('Foo');
    expect(component.goal.point_of_view).toBe('Foo');
    expect(component.goal.purpose_of).toBe('Foo');
    expect(component.goal.respect_to).toBe('Foo')

    expect(component.experimenters.length).toBe(1);
    expect(component.experimenters[0].name).toBe('Foo');
    expect(component.experimenters[0].organization).toBe('Foo');
    expect(component.experimenters[0].rol).toBe('Foo');
    expect(component.experimenters[0].task).toBe('Foo');
    expect(component.experimenters[0].email).toBe('Foo');
 
    //experimenters: borrar uno
   document.getElementById('removerExperimenters')?.click();
    fixture.detectChanges();
    expect(component.experimenters.length).toBe(0);
 
  
 
  });
});