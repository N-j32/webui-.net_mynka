import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WcatComponent } from './wcat.component';

describe('WcatComponent', () => {
  let component: WcatComponent;
  let fixture: ComponentFixture<WcatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WcatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(WcatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
