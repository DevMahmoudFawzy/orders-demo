import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrdersIndexComponent } from './orders-index.component';

describe('OrdersIndexComponent', () => {
  let component: OrdersIndexComponent;
  let fixture: ComponentFixture<OrdersIndexComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrdersIndexComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrdersIndexComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
