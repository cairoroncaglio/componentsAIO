import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StandardPlusIconComponent } from './standard-plus-icon.component';

describe('StandardPlusIconComponent', () => {
  let component: StandardPlusIconComponent;
  let fixture: ComponentFixture<StandardPlusIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StandardPlusIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StandardPlusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
