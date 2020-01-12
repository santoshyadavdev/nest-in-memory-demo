import { Controller } from '@nestjs/common';
import { InMemoryDBService, InMemoryDBEntityAsyncController } from '@nestjs-addons/in-memory-db';
import { ProductEntity } from './entities/product.entity';

@Controller('product')
export class ProductController extends InMemoryDBEntityAsyncController<ProductEntity> {
    constructor(private productService: InMemoryDBService<ProductEntity>) {
        super(productService);
    }

}
