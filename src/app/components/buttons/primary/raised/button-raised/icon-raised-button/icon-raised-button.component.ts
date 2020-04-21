import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'raised-button-icon',
  templateUrl: './icon-raised-button.component.html',
  styleUrls: ['./icon-raised-button.component.css']
})
export class IconRaisedButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() icon: string;
  @Input() color:string;
  @Input() size:string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
