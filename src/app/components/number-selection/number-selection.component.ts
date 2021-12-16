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
  startNumber:number=1;
  endNumber:number=20;
  numberItems:number[]=[];
  numberSelected:number[]=[];

  @Input() set noSelected(nos:number[]) {
    this.numberSelected=nos;
  }
  @Output() noSelectedChange = new EventEmitter<number[]>();

  createAllNumbers=():void=>{
    for(let i:number=this.startNumber;i<=this.endNumber;i++){
      this.numberItems.push(i);
    }
  }


}
