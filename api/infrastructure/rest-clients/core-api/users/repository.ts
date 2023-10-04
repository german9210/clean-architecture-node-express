import fetch from 'fetch';
import IUserRepository from '../../../../interface/contracts/user-repository';

export default class UserRepository implements IUserRepository {
  findById = async (id) => {
    const response = await fetch(`/users/${id}`, { method: "GET" });
    const user = await response.json();
    return {
      username: user.username,
      password: user.password,
      email: user.email
    }
  }
  
  add = (userData) => {
    fetch('/users', {
        method: "POST",
        body: JSON.stringify(userData)
    });
  }
}
