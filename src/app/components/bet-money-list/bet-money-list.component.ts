import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bet-money-list',
  templateUrl: './bet-money-list.component.html',
  styleUrls: ['./bet-money-list.component.css']
})
export class BetMoneyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  betAmount:number = 0;
  betOptionSet:number[]=[1, 5, 10, 20];

  @Input() set betAmountToApp(amount:number){
    this.betAmount=amount;
  }
  @Output() betAmountToAppChange = new EventEmitter<number>();

  updateBet(bet:number){
    this.betAmount=bet;
    this.betAmountToAppChange.emit(this.betAmount);
    console.log(this.betAmount);
  }

}
