import User from '../domain/entities/User';
import IUserRepository from './repositories/IUserRepository';

export default class UserRepository implements IUserRepository {
    private users: User[] = [];
  
    async createUser(user: User): Promise<User> {
      this.users.push(user);
      return user;
    }
  
    async getUsers(): Promise<User[]> {
      return this.users;
    }
  
    async getUserById(id: string): Promise<User | undefined> {
      return this.users.find(user => user.id === id);
    }
  
    async updateUser(user: User): Promise<User> {
      const index = this.users.findIndex(u => u.id === user.id);
      this.users[index] = user;
      return user;
    }
  
    async deleteUser(id: string): Promise<void> {
      this.users = this.users.filter(user => user.id !== id);
    }
  }