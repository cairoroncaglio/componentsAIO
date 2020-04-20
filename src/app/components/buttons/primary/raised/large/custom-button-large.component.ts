import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'


@Component({
  selector: 'button-raised-large',
  templateUrl: './custom-button-large.component.html',
  styleUrls: ['./button-raised-large.css']
})
export class CustomButtonLargeComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() color:string;

  constructor() { }


  ngOnInit() {

  }

}
