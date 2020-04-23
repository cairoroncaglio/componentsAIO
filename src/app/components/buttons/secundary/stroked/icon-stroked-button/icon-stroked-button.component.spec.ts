import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IconStrokedButtonComponent } from './icon-stroked-button.component';

describe('IconStrokedButtonComponent', () => {
  let component: IconStrokedButtonComponent;
  let fixture: ComponentFixture<IconStrokedButtonComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IconStrokedButtonComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IconStrokedButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
