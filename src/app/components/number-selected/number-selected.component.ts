import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-number-selected',
  templateUrl: './number-selected.component.html',
  styleUrls: ['./number-selected.component.css']
})
export class NumberSelectedComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() numberItem:number=0;
}
