import { Controller, Get } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { EmployeeEntity } from './entities/employee';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: InMemoryDBService<EmployeeEntity>) { }

    @Get()
    GetEmployee() {
        return this.employeeService.getAllAsync();
    }

}
