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

  it('new var', async () => {
  
    document.getElementById('agregarVariable')?.click();
    fixture.detectChanges()
    const AbsatractName = (<HTMLInputElement> document.getElementById('name0'));
    AbsatractName.value = 'Foo';
    AbsatractName.dispatchEvent(new Event('input'));
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.dropdown0')).nativeElement;
    select.value = select.options[0].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  
  console.log(select.options[0].textContent);
    

    const variabledescription = (<HTMLInputElement> document.getElementById('variable.description0'));
    variabledescription.value = 'Foo';
    variabledescription.dispatchEvent(new Event('input'));
    
   
    
    

    console.log(component)
 
    

      
  
   
    //VARIABLE

      console.log('aquiiii')
      

  
  
  

  
  
 
  });
});