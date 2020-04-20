import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewModelButtonsComponent } from './view-model-buttons.component';

describe('ViewModelButtonsComponent', () => {
  let component: ViewModelButtonsComponent;
  let fixture: ComponentFixture<ViewModelButtonsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModelButtonsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewModelButtonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
