import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'button-raised-small',
  templateUrl: './small.component.html',
  styleUrls: ['./small.component.css']
})
export class SmallComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() color:string;
  constructor() { }

  ngOnInit(): void {
  }

}
