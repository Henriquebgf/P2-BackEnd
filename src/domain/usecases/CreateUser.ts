

import  IUserRepository from '../../infrastructure/repositories/IUserRepository';
import  User  from '../../domain/entities/User';

export default class CreateUserUseCase {
    constructor(private readonly userRepository: IUserRepository) {}
  
    async execute(userData: Omit<User, 'id'>): Promise<User> {
      const user = new User('1','teste', 'teste2','teste3');
      const createdUser = await this.userRepository.createUser(user);
      return createdUser;
    }
  }
  
/*
interface ICreateUserRequest {
  id: string,
  name: string;
  email: string;
  password: string;
}

export class CreateUserUseCase {
  constructor(private userRepository: IUserRepository) {}

  async execute(data: ICreateUserRequest): Promise<User> {
    const userAlreadyExists = await this.userRepository.getUserById(data.id);

    if (userAlreadyExists) {
      throw new Error('User already exists.');
    }
    

    const user = new User(data);

    await this.userRepository.createUser(user);

    return user;
  }
}

*/
