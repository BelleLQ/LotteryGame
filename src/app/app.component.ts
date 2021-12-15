import {Component, QueryList, ViewChildren} from '@angular/core';
import {NumberSelectionItemComponent} from "./components/number-selection-item/number-selection-item.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lotteryGame';
  betAmount: number = 0;
  betSelected:boolean = false;
  numberSelected:number[]=[];
  isAllSelected:boolean=false;
  readyToGo:boolean = false;

  updateBetAmount(bet:number){
    this.betAmount=bet;
    console.log(this.betAmount);
  }
  updateBetSelection(isSelected:boolean) {
    this.betSelected = isSelected;
    console.log(this.betSelected);
  }
  updateNoSelected(noSelected:number[]){
    this.numberSelected=noSelected;
    console.log(this.numberSelected);

  }
  updateIsAllSelected(isAllNoSelected:boolean){
    this.isAllSelected=isAllNoSelected;
    this.readyToGo=this.betSelected&&this.isAllSelected;
  }
  checkout=():void=>{
    if(this.isAllSelected && this.betSelected) window.alert("Going to check out process....")
  }
  cleanUp=():void=>{
    this.numberSelected=[];
    this.betAmount=0;
  }
}
