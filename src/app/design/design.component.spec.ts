import { async, ComponentFixture, TestBed } from '@angular/core/testing';



import { DesignComponent } from './design.component';

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




describe('DesignComponent: input', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;
  let compiled: any;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ,CKEditorModule,MatFormFieldModule,MatGridListModule,MatCardModule ],
      declarations: [ DesignComponent ],
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
    fixture = TestBed.createComponent(DesignComponent);

    component = fixture.componentInstance;

    
   
    compiled = fixture.debugElement.nativeElement;
    fixture.detectChanges()
  });
function cargaDatos(){
  document.getElementById('agregarDesign')?.click();
    fixture.detectChanges()

    const select: HTMLSelectElement = fixture.debugElement.query(By.css('.design')).nativeElement;
    select.value = select.options[1].value;  // <-- select a new value
    select.dispatchEvent(new Event('change'));
    fixture.detectChanges();
    const Exname = (<HTMLInputElement> document.getElementById('parameters.name'));
    Exname.value = 'Foo';
    Exname.dispatchEvent(new Event('input'));
    const value = (<HTMLInputElement> document.getElementById('parameters.value'));
    value.value = 'Foo';
    value.dispatchEvent(new Event('input'));
    const description = (<HTMLInputElement> document.getElementById('parameters.description'));
    description.value = 'Foo';
    description.dispatchEvent(new Event('input'));
    const measure_in = (<HTMLInputElement> document.getElementById('parameters.measure_in'));
    measure_in.value = 'Foo';
    measure_in.dispatchEvent(new Event('input'));
}
  it('new design', async () => {
    cargaDatos()
    expect(component.Desing.length).toBe(2);
    expect(component.Desing[0].design).toBe('Pre-test/post-test');
    expect(component.Desing[0].design_parameters.length).toBe(1);
    expect(component.Desing[0].design_parameters[0].name).toBe("Foo");
    expect(component.Desing[0].design_parameters[0].value).toBe("Foo");
    expect(component.Desing[0].design_parameters[0].measure_in).toBe("Foo");
    expect(component.Desing[0].design_parameters[0].description).toBe("Foo");

   

    document.getElementById('guardar')?.click();
    fixture.detectChanges();
  });
  it('new design_parameters table', async () => {
  
    cargaDatos()
    expect(component.Desing[0].design_parameters.length).toBe(1);
    expect(component.Desing[0].design_parameters[0].name).toBe("Foo");
    expect(component.Desing[0].design_parameters[0].value).toBe("Foo");
    expect(component.Desing[0].design_parameters[0].measure_in).toBe("Foo");
    expect(component.Desing[0].design_parameters[0].description).toBe("Foo");

    
  });
  it('delete design_parameters table', async () => {
    cargaDatos()
    document.getElementById('removerParameters')?.click();
    fixture.detectChanges();
    expect(component.Desing[0].design_parameters.length).toBe(0);
    

    
  });
  it('delete design', async () => {
    cargaDatos()
    document.getElementById('removerDesign')?.click();
    fixture.detectChanges();
    expect(component.Desing.length).toBe(1);
    

    
  });
});