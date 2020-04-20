import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core'


@Component({
  selector: 'button-raised-standard',
  templateUrl: './standard.component.html',
  styleUrls: ['./standard.component.css']
})
export class StandardComponent implements OnInit {
  @Input() label: string;
  @Input() disableBtn;
  @Input() color:string;
  constructor() { }

  ngOnInit(): void {
  }

}
