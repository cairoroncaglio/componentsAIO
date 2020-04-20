import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-model-buttons',
  templateUrl: './view-model-buttons.component.html',
  styleUrls: ['./view-model-buttons.component.css']
})
export class ViewModelButtonsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  disableLargeButton=false;
  
  btnClick(){
    this.disableLargeButton=!this.disableLargeButton;
  }
}
