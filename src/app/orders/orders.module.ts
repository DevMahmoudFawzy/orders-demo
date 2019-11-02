import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';

import { OrdersRoutingModule } from './orders-routing.module';
import { OrdersIndexComponent } from './orders-index/orders-index.component';
import { OrderService } from '../shared/services/order.service';
import { OrderResolver } from '../shared/guards/order.resolver';


@NgModule({
  declarations: [OrdersIndexComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    OrdersRoutingModule
  ],
  providers: [
    OrderService,
    OrderResolver
  ]
})
export class OrdersModule { }
