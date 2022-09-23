import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MicroovenComponent } from './microoven.component';

describe('MicroovenComponent', () => {
  let component: MicroovenComponent;
  let fixture: ComponentFixture<MicroovenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MicroovenComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MicroovenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
