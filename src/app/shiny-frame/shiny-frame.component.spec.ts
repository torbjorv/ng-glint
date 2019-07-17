import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShinyFrameComponent } from './shiny-frame.component';

describe('ShinyFrameComponent', () => {
  let component: ShinyFrameComponent;
  let fixture: ComponentFixture<ShinyFrameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShinyFrameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShinyFrameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
