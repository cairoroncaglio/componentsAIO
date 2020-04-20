import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SmallPlusIconComponent } from './small-plus-icon.component';

describe('SmallPlusIconComponent', () => {
  let component: SmallPlusIconComponent;
  let fixture: ComponentFixture<SmallPlusIconComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SmallPlusIconComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SmallPlusIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
