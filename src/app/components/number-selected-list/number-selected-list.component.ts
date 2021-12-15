import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-number-selected-list',
  templateUrl: './number-selected-list.component.html',
  styleUrls: ['./number-selected-list.component.css']
})
export class NumberSelectedListComponent implements OnInit {
  @Input() numbers:number[]=[];
  @Input() totalBet:number=0;
  constructor() { }

  ngOnInit(): void {
    console.log(this.numbers);
  }

}
