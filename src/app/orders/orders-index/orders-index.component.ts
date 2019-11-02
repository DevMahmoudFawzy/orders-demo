import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { OrderService } from 'src/app/shared/services/order.service';
import { Order } from 'src/app/shared/models/order.model';

@Component({
  selector: 'app-orders-index',
  templateUrl: './orders-index.component.html',
  styleUrls: ['./orders-index.component.scss']
})
export class OrdersIndexComponent implements OnInit {

  displayedColumns: string[] = ['orderItems', 'price', 'quantity'];

  order: Order;

  constructor(
    private ordersService: OrderService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.order = this.activatedRoute.snapshot.data.orderData as Order;
  }

  onDecrementQuantity(itemID) {
    const itemIndex = this.order.order_items.findIndex(o => o.id === itemID);
    if (itemIndex !== -1) {
      this.ordersService.decrementQuantity(this.order.id, itemID).subscribe((res) => {
        this.order.order_items[itemIndex].quantity--;
      });
    }
  }

  onIncrementQuantity(itemID) {
    const itemIndex = this.order.order_items.findIndex(o => o.id === itemID);
    if (itemIndex !== -1) {
      this.ordersService.incrementQuantity(this.order.id, itemID).subscribe((res) => {
        this.order.order_items[itemIndex].quantity++;
      });
    }
  }

}
