import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-bet-money-list',
  templateUrl: './bet-money-list.component.html',
  styleUrls: ['./bet-money-list.component.css']
})
export class BetMoneyListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Output() betAmountToApp = new EventEmitter<number>();
  @Output() betIsSelected = new EventEmitter<boolean>();
  betAmount: number = 0;
  betSelected:boolean = false;
  betOptionSet:number[]=[1, 5, 10, 20];
  clearBet = ():void =>{
    this.betAmount=0;
    this.betAmountToApp.emit(this.betAmount);
    console.log(this.betAmount);
  }
  updateBet(bet:number){
    this.betAmount=bet;
    this.betAmountToApp.emit(this.betAmount);
    console.log(this.betAmount);
  }
  updateBetSelect(isSelected:boolean){
    this.betSelected=isSelected;
    this.betIsSelected.emit(this.betSelected);
    console.log(this.betSelected);
  }
}
