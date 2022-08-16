import { dataSource } from '../index';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { IUserRepository } from 'src/infra/repository/IUserRepository';

export interface ICreateUser {
    name: string;
    email: string;
    password: string;
} 

export class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;
    constructor() {
      this.ormRepository = dataSource.getRepository(User);
    }

    public async findByEmail(email: string): Promise<User | null> {
        const user = await this.ormRepository.findOne({
            where: {
                email
            }
        });

        return user;
    }

    public async create({ name, email, password }: ICreateUser): Promise<User> {
        const userCreated = this.ormRepository.create({ name, email, password });
    
        await this.ormRepository.save(userCreated);
    
        return userCreated;
      } 
}  