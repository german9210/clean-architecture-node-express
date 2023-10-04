import fetch from 'fetch';
import IUserRepository from '../../../../interface/contracts/user-repository';
import { IUserResponse } from './model';
import User from '../../../../entities/user';

export default class UserRepository implements IUserRepository {
  findById = async (id: string) => {
    const response = await fetch(`/users/${id}`, { method: "GET" });
    const user: IUserResponse = await response.json();

    return {
      username: user.data?.username,
      password: user.data?.password,
      email: user.data?.email
    }
  }
  
  add = (userData: User) => {
    fetch('/users', {
        method: "POST",
        body: JSON.stringify(userData)
    });
  }
}
