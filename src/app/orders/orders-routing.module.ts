import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrdersIndexComponent } from './orders-index/orders-index.component';
import { OrderResolver } from '../shared/guards/order.resolver';


const routes: Routes = [
  {
    path: '',
    component: OrdersIndexComponent,
    resolve: { orderData: OrderResolver }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrdersRoutingModule { }
