import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconRaisedButtonComponent } from './icon-raised-button.component';

describe('IconRaisedButtonComponent', () => {
  let component: IconRaisedButtonComponent;
  let fixture: ComponentFixture<IconRaisedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconRaisedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconRaisedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
