import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetMoneyOptionComponent } from './bet-money-option.component';

describe('BetMoneyOptionComponent', () => {
  let component: BetMoneyOptionComponent;
  let fixture: ComponentFixture<BetMoneyOptionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetMoneyOptionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetMoneyOptionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
