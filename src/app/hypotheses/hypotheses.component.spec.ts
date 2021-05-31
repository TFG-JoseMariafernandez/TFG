import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { HypothesesComponent } from './hypotheses.component';

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




describe('HypothesesComponent: input', () => {
  let component: HypothesesComponent;
  let fixture: ComponentFixture<HypothesesComponent>;
  let compiled: any;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ,CKEditorModule,MatFormFieldModule,MatGridListModule,MatCardModule ],
      declarations: [ HypothesesComponent ],
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
    fixture = TestBed.createComponent(HypothesesComponent);

    component = fixture.componentInstance;

    
   
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges()
  });
  function cargaDatos(){
    document.getElementById('agrgarHypotheses')?.click();
    fixture.detectChanges()
    const name = (<HTMLInputElement> document.getElementById('name0'));
    name.value = 'Foo';
    name.dispatchEvent(new Event('input'));
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.type0')).nativeElement;
    select.value = select.options[0].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
  }

  it('new Hypotheses', async () => {
  
    cargaDatos()

    expect(component.hypotheses.length).toBe(2);
    expect(component.hypotheses[0].name).toBe('Foo');
    expect(component.hypotheses[0].type).toBe('impacted');
  
    document.getElementById('guardar')?.click();
    fixture.detectChanges();

  });
  it('delete Hypotheses', async () => {
  
    cargaDatos()
    document.getElementById('removerHypotheses')?.click();
    fixture.detectChanges();
    expect(component.hypotheses.length).toBe(1);
    
  
   

  });
});