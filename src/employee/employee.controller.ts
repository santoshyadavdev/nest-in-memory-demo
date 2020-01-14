import { Controller, Get, Param } from '@nestjs/common';
import { InMemoryDBService } from '@nestjs-addons/in-memory-db';
import { EmployeeEntity } from './entities/employee';

@Controller('employee')
export class EmployeeController {
    constructor(private employeeService: InMemoryDBService<EmployeeEntity>) {

    }

    @Get('seed')
    GetEmployee() {
        const recordFactory = (idx: number): Partial<EmployeeEntity> => ({
            id: idx, email: `test${idx}@test.com`, age: 10, department: 'Marketing', name: `Test${idx}`
        });

        this.employeeService.seed(recordFactory, 10);
        return this.employeeService.getAll();
    }

    @Get(':id')
    GetEmployeeByID(@Param('id') id: number) {
        return this.employeeService.get(+id);
    }

}
