import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PretComponent } from './pret.component';

describe('PretComponent', () => {
  let component: PretComponent;
  let fixture: ComponentFixture<PretComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PretComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PretComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
