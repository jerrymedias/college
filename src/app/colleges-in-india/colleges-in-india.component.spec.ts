import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollegesInIndiaComponent } from './colleges-in-india.component';

describe('CollegesInIndiaComponent', () => {
  let component: CollegesInIndiaComponent;
  let fixture: ComponentFixture<CollegesInIndiaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CollegesInIndiaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollegesInIndiaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
