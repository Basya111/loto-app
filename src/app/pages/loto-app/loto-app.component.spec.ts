import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LotoAppComponent } from './loto-app.component';

describe('LotoAppComponent', () => {
  let component: LotoAppComponent;
  let fixture: ComponentFixture<LotoAppComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LotoAppComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LotoAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
