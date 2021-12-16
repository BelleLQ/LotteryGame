import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-number-selection-item',
  templateUrl: './number-selection-item.component.html',
  styleUrls: ['./number-selection-item.component.css']
})
export class NumberSelectionItemComponent implements OnInit {
  static isSelected:number[]=[];
  @Input() numberItem:number=0;
  @Input() set numbersSelected(nos:number[]) {
    NumberSelectionItemComponent.isSelected=nos;
  }
  @Output() numbersSelectedChange= new EventEmitter<number[]>();

  constructor() { }
  ngOnInit(){}
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

      this.numbersSelectedChange.emit(NumberSelectionItemComponent.isSelected);
  }

}
