import { DataSource } from 'typeorm';
import User from './entities/User';
import { CreateUser1660611575866 } from './migrations/1660611575866-CreateUser';

export const dataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5433,
  username: 'postgres',
  password: 'docker',
  database: 'gobarberddd',
  entities: [User],
  migrations: [CreateUser1660611575866],
});
