import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'
@Component({
  selector: 'button-raised-small-icon',
  templateUrl: './small-plus-icon.component.html',
  styleUrls: ['./small-plus-icon.component.css']
})
export class SmallPlusIconComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() icon: string;
  @Input() color:string;
  constructor() { }

  ngOnInit(): void {
  }

}
