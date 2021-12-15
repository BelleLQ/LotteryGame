import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BetMoneyListComponent } from './bet-money-list.component';

describe('BetMoneyListComponent', () => {
  let component: BetMoneyListComponent;
  let fixture: ComponentFixture<BetMoneyListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BetMoneyListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BetMoneyListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
