import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lotteryGame';
  betAmount:number = 0;
  numberSelected:number[]=[];

  checkout=():void=>{
    console.log(this.betAmount);
    if(this.numberSelected.length==5 && this.betAmount>0) window.alert("Going to check out process....")
  }
  cleanUp=():void=>{
    this.numberSelected=[];
    this.betAmount=0;
  }
  updateBetAmount(bet:number){
    this.betAmount=bet;
    console.log(this.betAmount);
  }
}
