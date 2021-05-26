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
   
    const tableId = (<HTMLInputElement> document.getElementById('tableId0'));
    tableId.value = 'Foo';
    tableId.dispatchEvent(new Event('input'));
    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.analysesType')).nativeElement;
    select.value = select.options[9].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const selectTest: HTMLSelectElement = fixture.debugElement.query(By.css('.test0')).nativeElement;
    selectTest.value = selectTest.options[3].value;  // <-- select a new value
    selectTest.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const alpha = (<HTMLInputElement> document.getElementById('alpha0'));
    alpha.value = 'Foo';
    alpha.dispatchEvent(new Event('input'));

    console.log(component);
    
    expect(component.analyses.length).toBe(2);
    expect(component.analyses[0].name).toBe('Foo');
    expect(component.analyses[0].table[0].analyses_type).toBe('null_hypothesis_test');
    expect(component.analyses[0].table.length).toBe(1);
    expect(component.analyses[0].table[0].id).toBe("Foo");
    expect(component.analyses[0].table[0].test).toBe("anova");
    expect(component.analyses[0].table[0].alpha).toBe("Foo");
    document.getElementById('removerTables')?.click();
    fixture.detectChanges()
    expect(component.analyses[0].table.length).toBe(0);


  });
});
