import { Controller, Get, Post, Body, Put, Delete, Param } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { ProductEntity } from './product/entities/product.entity';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,
    private productService: InMemoryDBService<ProductEntity>) {
  }

  @Get()
  getProducts() {
    return this.productService.getAll();
  }

  @Post()
  AddProduct(@Body() product: ProductEntity) {
    return this.productService.create(product);
  }

  @Put()
  EditProduct(@Body() product: ProductEntity) {
    return this.productService.update(product);
    // this.productService.query((data) => data.id === 1)
  }

  @Delete(':id')
  DeleteProduct(@Param('id') id: number) {
    return this.productService.delete(+id)
  }

  @Get(':id')
  GetProductById(@Param('id') id: number) {
    return this.productService.query(data => data.id === +id)
  }

}
