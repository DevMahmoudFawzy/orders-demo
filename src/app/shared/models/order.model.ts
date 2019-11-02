import { OrderItem } from './order-item.model';
import { Restaurant } from './restaurant.model';
import { User } from './user.model';

export interface Order {
    created_at: string;
    id: number;
    min: number;
    order_items: OrderItem[];
    restaurant: Restaurant;
    status: number;
    tax_per_person: number;
    updated_at: string;
    user: User;
}
