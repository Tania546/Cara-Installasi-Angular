import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TeachearComponent } from './teachear.component';

describe('TeachearComponent', () => {
  let component: TeachearComponent;
  let fixture: ComponentFixture<TeachearComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TeachearComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TeachearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
