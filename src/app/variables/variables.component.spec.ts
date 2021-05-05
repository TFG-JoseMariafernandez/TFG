import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { VariablesComponent } from './variables.component';

import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';



describe('VariablesComponent: input', () => {
  let component: VariablesComponent;
  let fixture: ComponentFixture<VariablesComponent>;
  let compiled: any;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
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

 
    

      
  
   
    //VARIABLE

      console.log('aquiiii')
      

  
  
  

  
  
 
  });
});