import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GlobalstatusComponent } from './globalstatus.component';

describe('GlobalstatusComponent', () => {
  let component: GlobalstatusComponent;
  let fixture: ComponentFixture<GlobalstatusComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GlobalstatusComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GlobalstatusComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
