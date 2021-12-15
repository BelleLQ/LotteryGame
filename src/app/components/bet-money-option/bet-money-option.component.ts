import {Component, Input, OnInit,Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-bet-money-option',
  templateUrl: './bet-money-option.component.html',
  styleUrls: ['./bet-money-option.component.css']
})
export class BetMoneyOptionComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
  }

  @Input() betOption: number = 0;
  static totalAmount: number = 0;
  static isSelected: boolean = false;
  @Output() totalBet = new EventEmitter<number>();
  @Output() betIsSelected = new EventEmitter<boolean>();

  addBet = (event: Event): void => {
    const targetValue = parseInt((event.target as HTMLButtonElement).value);
    BetMoneyOptionComponent.totalAmount+=targetValue;
    window.alert(`${targetValue} is added to bet, total bet is: $ ${BetMoneyOptionComponent.totalAmount}`)
    this.totalBet.emit(BetMoneyOptionComponent.totalAmount);
    if(BetMoneyOptionComponent.totalAmount>0) BetMoneyOptionComponent.isSelected=true;
    else BetMoneyOptionComponent.isSelected=false;
    this.betIsSelected.emit(BetMoneyOptionComponent.isSelected);
    console.log(BetMoneyOptionComponent.totalAmount);
  }

}
