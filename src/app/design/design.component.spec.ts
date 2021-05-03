import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { By } from '@angular/platform-browser';
import { Goal, Experimenters } from '../models/context';

import { DesignComponent } from './design.component';
import { ComponentFixtureAutoDetect } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';



describe('DesignComponent: input', () => {
  let component: DesignComponent;
  let fixture: ComponentFixture<DesignComponent>;
  let compiled: any;
  let heroService: any;


  

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ FormsModule, RouterTestingModule ],
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

    fixture.detectChanges();
    compiled = fixture.debugElement.nativeElement;
 
  });

 
});