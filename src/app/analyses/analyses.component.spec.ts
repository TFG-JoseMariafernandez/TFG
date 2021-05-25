import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { AnalysesComponent } from './analyses.component';

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




describe('AnalysesComponent: input', () => {
  let component: AnalysesComponent;
  let fixture: ComponentFixture<AnalysesComponent>;
  let compiled: any;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ,CKEditorModule,MatFormFieldModule,MatGridListModule,MatCardModule ],
      declarations: [ AnalysesComponent ],
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
    fixture = TestBed.createComponent(AnalysesComponent);

    component = fixture.componentInstance;
    console.log(component);
    
   
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges()
  });

  it('new var', async () => {
  
    document.getElementById('agregarAnalyses')?.click();
    fixture.detectChanges()
    const Name = (<HTMLInputElement> document.getElementById('name0'));
    Name.value = 'Foo';
    Name.dispatchEvent(new Event('input'));
    document.getElementById('agregarTable')?.click();
    fixture.detectChanges();
    const tableId = (<HTMLInputElement> document.getElementById('tableId0'));
    tableId.value = 'Foo';
    tableId.dispatchEvent(new Event('input'));
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.analysesType')).nativeElement;
    select.value = select.options[0].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const selectTest: HTMLSelectElement = fixture.debugElement.query(By.css('.test')).nativeElement;
    selectTest.value = selectTest.options[0].value;  // <-- select a new value
    selectTest.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const alpha = (<HTMLInputElement> document.getElementById('alpha0'));
    alpha.value = 'Foo';
    alpha.dispatchEvent(new Event('input'));

    const group_var: HTMLSelectElement = fixture.debugElement.query(By.css('.group_Var')).nativeElement;
    group_var.value = group_var.options[0].value;  // <-- select a new value
    group_var.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    document.getElementById('agregarOfGroup')?.click();
    fixture.detectChanges()
 
    const group_name: HTMLSelectElement = fixture.debugElement.query(By.css('.groupName')).nativeElement;
    group_name.value = group_name.options[0].value;  // <-- select a new value
    group_name.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    console.log(component);
  });
});
