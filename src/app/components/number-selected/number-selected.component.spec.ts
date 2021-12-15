import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSelectedComponent } from './number-selected.component';

describe('NumberSelectedComponent', () => {
  let component: NumberSelectedComponent;
  let fixture: ComponentFixture<NumberSelectedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberSelectedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSelectedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
