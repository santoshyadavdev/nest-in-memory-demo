import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface EmployeeEntity extends InMemoryDBEntity {
    name: string;
    email: number;
    department: string;
    age: number;
}
