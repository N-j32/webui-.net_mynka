import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AmazondealsComponent } from './amazondeals.component';

describe('AmazondealsComponent', () => {
  let component: AmazondealsComponent;
  let fixture: ComponentFixture<AmazondealsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AmazondealsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AmazondealsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
