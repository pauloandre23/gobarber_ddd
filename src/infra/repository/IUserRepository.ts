import { IUser } from "src/domain/models/IUser";
import { ICreateUser } from "../typeorm/repository/UserRepository";

export interface IUserRepository {
    
    findByEmail(email: string): Promise<IUser | null>;
    
    create({ name, email, password }: ICreateUser): Promise<IUser>;
   
  }