import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonLargePlusIconComponent } from './custom-button-large-plus-icon.component';

describe('CustomButtonLargePlusIconComponent', () => {
  let component: CustomButtonLargePlusIconComponent;
  let fixture: ComponentFixture<CustomButtonLargePlusIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomButtonLargePlusIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonLargePlusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
