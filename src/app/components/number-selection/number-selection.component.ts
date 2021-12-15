import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-number-selection',
  templateUrl: './number-selection.component.html',
  styleUrls: ['./number-selection.component.css']
})
export class NumberSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.createAllNumbers();
  }
  @Input() isbetSelected:boolean=false;
  startNumber:number=1;
  endNumber:number=20;
  numberItems:number[]=[];
  clear:boolean=false;

  @Output() noSelected = new EventEmitter<number[]>();
  @Output() allSelected = new EventEmitter<boolean>();
  numberSelected:number[]=[];
  isAllSelected:boolean=false;

  createAllNumbers=():void=>{
    for(let i:number=this.startNumber;i<=this.endNumber;i++){
      this.numberItems.push(i);
      console.log(i);
    }
  }
  updateNumbers(numberSelected:number[]){
    this.numberSelected=numberSelected;
    this.noSelected.emit(this.numberSelected);
  }
  updateIsSelected(isAllNumSelected:boolean){
    this.isAllSelected=isAllNumSelected;
    this.allSelected.emit(this.isAllSelected);
  }
  resetNumberSelected():void{
    this.numberSelected=[];
    this.clear=true;
    console.log('clear hit');
  }

}
