import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SlisComponent } from './slis.component';

describe('SlisComponent', () => {
  let component: SlisComponent;
  let fixture: ComponentFixture<SlisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SlisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SlisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
