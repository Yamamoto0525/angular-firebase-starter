import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DevAuthComponent } from './dev-auth.component';

describe('DevAuthComponent', () => {
  let component: DevAuthComponent;
  let fixture: ComponentFixture<DevAuthComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DevAuthComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DevAuthComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
