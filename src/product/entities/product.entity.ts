import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface ProductEntity extends InMemoryDBEntity {
    name: string;
    price: number;
    seller: string;
    discount: number;
}
