import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { VariablesComponent } from './variables.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import {  MatCardModule} from "@angular/material/card";
import {By} from "@angular/platform-browser";
import {
  MatGridListModule,

} from '@angular/material/grid-list';

import { MatFormFieldModule } from '@angular/material/form-field';




describe('VariablesComponent: input', () => {
  let component: VariablesComponent;
  let fixture: ComponentFixture<VariablesComponent>;
  let compiled: any;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ,CKEditorModule,MatFormFieldModule,MatGridListModule,MatCardModule ],
      declarations: [ VariablesComponent ],
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
    fixture = TestBed.createComponent(VariablesComponent);

    component = fixture.componentInstance;

    
   
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges()
  });
  function cargaDatos(){
    document.getElementById('agregarVariable')?.click();
    fixture.detectChanges()
    const AbsatractName = (<HTMLInputElement> document.getElementById('name0'));
    AbsatractName.value = 'Foo';
    AbsatractName.dispatchEvent(new Event('input'));
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.dropdown0')).nativeElement;
    select.value = select.options[0].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

  

    

    const domain: HTMLSelectElement = fixture.debugElement.query(By.css('.domain0')).nativeElement;
    domain.value = domain.options[0].value;  // <-- select a new value
    domain.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    const ordered: HTMLSelectElement = fixture.debugElement.query(By.css('.ordered0')).nativeElement;
    ordered.value = ordered.options[0].value;  // <-- select a new value
    ordered.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    
   
    
    document.getElementById('agregarType')?.click();
    fixture.detectChanges();
 
    const Exname = (<HTMLInputElement> document.getElementById('type.name0'));
    Exname.value = 'Foo';
    Exname.dispatchEvent(new Event('input'));
    const email = (<HTMLInputElement> document.getElementById('type.description0'));
    email.value = 'Foo';
    email.dispatchEvent(new Event('input'));
    const organization = (<HTMLInputElement> document.getElementById('variable.units0'));
    organization.value = 'Foo';
    organization.dispatchEvent(new Event('input'));
  


 
    document.getElementById('guardar')?.click();
    fixture.detectChanges();
  }

  it('new var not outcome', async () => {
  cargaDatos();
  

expect(component.variables[0].name).toBe('Foo');
expect(component.variables[0].units).toBe('Foo');
expect(component.variables[0].ordered).toBe('true');
expect(component.variables[0].domain).toBe('One_of');
expect(component.variables[0].type).toBe('Controllable_factor');


  });
  it('add var  outcome', async () => {
    cargaDatos();
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.dropdown0')).nativeElement;
    select.value = select.options[2].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  
 
  expect(component.variables[0].type).toBe('OutCome');

  
    });
    it('add var  outcome, check other values', async () => {
     
     document.getElementById('agregarVariable')?.click();
    fixture.detectChanges()
    const AbsatractName = (<HTMLInputElement> document.getElementById('name0'));
    AbsatractName.value = 'Foo';
    AbsatractName.dispatchEvent(new Event('input'));
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.dropdown0')).nativeElement;
    select.value = select.options[2].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();

    document.getElementById('guardar')?.click();
    fixture.detectChanges();
      expect(component.variables[0].units).toBe('');
expect(component.variables[0].ordered).toBe(false);
expect(component.variables[0].domain).toBe(' ');
    
    
    expect(component.variables[0].type).toBe('OutCome');
  
    
      });
      it('delete variable', async () => {
     
        document.getElementById( 'removerVariable')?.click();
       fixture.detectChanges()
       expect(component.variables.length).toBe(0);
  
         });
         it('add   type table', async () => {
          cargaDatos();
          expect(component.variables[0].types.length).toBe(1);
          expect(component.variables[0].types[0].name).toBe('Foo');
          expect(component.variables[0].types[0].description).toBe('Foo');
      
        
          });
          it('delete   type table', async () => {
            cargaDatos();
            document.getElementById('removerType')?.click();
            fixture.detectChanges()
            expect(component.variables[0].types.length).toBe(0);
        
        
          
            });
});