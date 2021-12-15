import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSelectionItemComponent } from './number-selection-item.component';

describe('NumberSelectionItemComponent', () => {
  let component: NumberSelectionItemComponent;
  let fixture: ComponentFixture<NumberSelectionItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberSelectionItemComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSelectionItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
