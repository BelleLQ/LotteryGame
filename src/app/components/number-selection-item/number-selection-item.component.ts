import {Component, OnInit, Input, Output, EventEmitter, OnChanges, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-number-selection-item',
  templateUrl: './number-selection-item.component.html',
  styleUrls: ['./number-selection-item.component.css']
})
export class NumberSelectionItemComponent implements OnChanges {
  static isSelected:number[]=[];
  @Input() numberItem:number=0;
  @Input() clearIsHit:boolean=false;
  @Output() numbersSelected= new EventEmitter<number[]>();
  @Output() allNumberSelected = new EventEmitter<boolean>();
  set isSelected(nums: number[]) {
    this.isSelected = nums;
  }
  constructor() { }
  OnInit(){}

  ngOnChanges(changes: SimpleChanges) {
    if(this.checkClear()){
      NumberSelectionItemComponent.isSelected=[];
      this.numbersSelected.emit(NumberSelectionItemComponent.isSelected);
    }
  }
  numberSelectedToggle =(event:Event):void=>{
    const targetValue=parseInt((event.target as HTMLButtonElement).value);
      if(NumberSelectionItemComponent.isSelected.length<5 && !NumberSelectionItemComponent.isSelected.includes(targetValue)) {
        NumberSelectionItemComponent.isSelected.push(targetValue);
        window.alert(`${targetValue} is added to the selection, ${NumberSelectionItemComponent.isSelected.length} numbers are chosen`);
      }
      else if(NumberSelectionItemComponent.isSelected.includes(targetValue)){
        let targetIndex = NumberSelectionItemComponent.isSelected.indexOf(targetValue);
        NumberSelectionItemComponent.isSelected.splice(targetIndex,1);
        window.alert(`${targetValue} is removed from the selection, ${NumberSelectionItemComponent.isSelected.length} numbers are chosen`);
      }
    if(NumberSelectionItemComponent.isSelected.length==5 && !NumberSelectionItemComponent.isSelected.includes(targetValue)){
        window.alert(`5 numbers are chosen!`);
      }

      this.numbersSelected.emit(NumberSelectionItemComponent.isSelected);
      if(NumberSelectionItemComponent.isSelected.length==5){
        this.allNumberSelected.emit(true);
      }
      else this.allNumberSelected.emit(false);
    console.log(NumberSelectionItemComponent.isSelected);
  }
  checkClear():boolean{
    return this.clearIsHit;
  }
}
