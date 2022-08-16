import { dataSource } from '../index';
import { getRepository, Repository } from 'typeorm';
import User from '../entities/User';
import { IUserRepository } from 'src/infra/repository/IUserRepository';

export class UserRepository implements IUserRepository {
    private ormRepository: Repository<User>;
    constructor() {
      this.ormRepository = dataSource.getRepository(User);
    }

    public async findByEmail(email: string): Promise<any> {
        const user = await this.ormRepository.findOne({
            where: {email}});
    }
}