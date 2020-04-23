import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'

@Component({
  selector: 'button-stroked-icon',
  templateUrl: './icon-stroked-button.component.html',
  styleUrls: ['./icon-stroked-button.component.css']
})
export class IconStrokedButtonComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() icon: string;
  @Input() color:string;
  @Input() size:string;
  constructor() { }

  ngOnInit(): void {
  }

}
