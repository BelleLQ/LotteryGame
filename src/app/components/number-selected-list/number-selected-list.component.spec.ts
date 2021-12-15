import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumberSelectedListComponent } from './number-selected-list.component';

describe('NumberSelectedListComponent', () => {
  let component: NumberSelectedListComponent;
  let fixture: ComponentFixture<NumberSelectedListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NumberSelectedListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NumberSelectedListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
