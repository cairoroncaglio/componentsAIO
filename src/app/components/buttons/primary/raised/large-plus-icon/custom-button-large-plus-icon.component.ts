import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'


@Component({
  selector: 'button-raised-large-icon',
  templateUrl: './custom-button-large-plus-icon.component.html',
  styleUrls: ['./button-raised-large-icon.css']
})
export class CustomButtonLargePlusIconComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() icon: string;
  @Input() color:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
