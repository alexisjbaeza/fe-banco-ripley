import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { RetiroComponent } from './retiro.component';

describe('RetiroComponent', () => {
  let component: RetiroComponent;
  let fixture: ComponentFixture<RetiroComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [RetiroComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetiroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
