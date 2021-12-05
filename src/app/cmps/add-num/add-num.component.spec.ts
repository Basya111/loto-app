import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddNumComponent } from './add-num.component';

describe('AddNumComponent', () => {
  let component: AddNumComponent;
  let fixture: ComponentFixture<AddNumComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddNumComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddNumComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
