import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AvlProdComponent } from './avl-prod.component';

describe('AvlProdComponent', () => {
  let component: AvlProdComponent;
  let fixture: ComponentFixture<AvlProdComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AvlProdComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AvlProdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
