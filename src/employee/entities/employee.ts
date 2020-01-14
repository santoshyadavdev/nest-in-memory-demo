import { InMemoryDBEntity } from '@nestjs-addons/in-memory-db';

export interface EmployeeEntity extends InMemoryDBEntity {
    name: string;
    email: string;
    department: string;
    age: number;
}
