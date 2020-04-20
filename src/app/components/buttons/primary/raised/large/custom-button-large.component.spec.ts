import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomButtonLargeComponent } from './custom-button-large.component';

describe('CustomButtonLargeComponent', () => {
  let component: CustomButtonLargeComponent;
  let fixture: ComponentFixture<CustomButtonLargeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomButtonLargeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomButtonLargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
