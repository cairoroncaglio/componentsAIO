
import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'button-raised',
  templateUrl: './button-raised.component.html',
  styleUrls: ['./button-raised.component.css']
})
export class ButtonRaisedComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() color:string;
  @Input() size:string;

  
  constructor() { }

  ngOnInit() {
    
  }

}
