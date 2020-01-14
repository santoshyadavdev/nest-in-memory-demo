import { Module } from '@nestjs/common';
import { InMemoryDBModule } from '@nestjs-addons/in-memory-db';
import { EmployeeController } from './employee.controller';

@Module({
  imports: [InMemoryDBModule.forFeature('employee')],
  controllers: [EmployeeController]
})
export class EmployeeModule {

}
