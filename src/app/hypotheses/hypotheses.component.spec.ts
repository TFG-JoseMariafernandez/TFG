import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HypothesesComponent } from './hypotheses.component';

describe('HypothesesComponent', () => {
  let component: HypothesesComponent;
  let fixture: ComponentFixture<HypothesesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HypothesesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HypothesesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
