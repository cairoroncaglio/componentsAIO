import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'button-stroked',
  templateUrl: './button-stroked.component.html',
  styleUrls: ['./button-stroked.component.css']
})
export class ButtonStrokedComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() color:string;
  @Input() size:string;
  constructor() { }

  ngOnInit(): void {
  }

}
