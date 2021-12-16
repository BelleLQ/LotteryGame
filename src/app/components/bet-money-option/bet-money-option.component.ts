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

  static totalAmount: number = 0;

  @Input() betOption: number = 0;
  @Input() set betAmount(amount:number){
    BetMoneyOptionComponent.totalAmount=amount;
  }
  @Output() betAmountChange = new EventEmitter<number>();

  updateBet = (event: Event): void => {
    const targetValue = parseInt((event.target as HTMLButtonElement).value);
    BetMoneyOptionComponent.totalAmount+=targetValue;
    window.alert(`${targetValue} is added to bet, total bet is: $ ${BetMoneyOptionComponent.totalAmount}`)
    this.betAmountChange.emit(BetMoneyOptionComponent.totalAmount);
  }

}
