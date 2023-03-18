import User from '../../domain/entities/User';

export default interface IUserRepository {
    createUser(user: User): Promise<User>;
    getUsers(): Promise<User[]>;
    getUserById(id: string): Promise<User | undefined>;
    updateUser(user: User): Promise<User>;
    deleteUser(id: string): Promise<void>;
  }