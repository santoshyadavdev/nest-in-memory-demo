import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { ProductModule } from './product/product.module';
import { EmployeeModule } from './employee/employee.module';

@Module({
  imports: [InMemoryDBModule.forRoot(), ProductModule, EmployeeModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
