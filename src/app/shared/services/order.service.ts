import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Order } from '../models/order.model';
import { environment } from 'src/environments/environment';
import { ErrorHandler } from './error-handler.service';

@Injectable()
export class OrderService {
    /**
     *
     */
    constructor(private http: HttpClient, private errorHandler: ErrorHandler) { }

    getOrder(orderID): Observable<Order> {
        return this.http.get<Order>(`${environment.api_url}orders/${orderID}`).pipe(
            catchError(this.errorHandler.handleError)
        );
    }

    incrementQuantity(orderID, itemID): Observable<any> {
        return this.http.post(`${environment.api_url}orders/${orderID}/items/${itemID}`, null).pipe(
            catchError(this.errorHandler.handleError)
        );
    }

    decrementQuantity(orderID, itemID): Observable<any> {
        return this.http.delete(`${environment.api_url}orders/${orderID}/items/${itemID}`).pipe(
            catchError(this.errorHandler.handleError)
        );
    }
}
