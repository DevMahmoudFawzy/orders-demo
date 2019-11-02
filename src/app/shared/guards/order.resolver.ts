import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

import { OrderService } from '../services/order.service';
import { Order } from '../models/order.model';

@Injectable()
export class OrderResolver implements Resolve<any> {

    constructor(private orderService: OrderService) { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Order> | Promise<Order> | Order {

        const orderId = +route.paramMap.get('id');

        return this.orderService.getOrder(orderId);
    }

}
