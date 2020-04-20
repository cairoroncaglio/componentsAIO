import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'button-raised-standard-icon',
  templateUrl: './standard-plus-icon.component.html',
  styleUrls: ['./standard-plus-icon.component.css']
})
export class StandardPlusIconComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() icon: string;
  @Input() color:string;
  constructor() { }

  ngOnInit(): void {
  }

}
