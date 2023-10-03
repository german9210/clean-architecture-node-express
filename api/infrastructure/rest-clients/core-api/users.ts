import fetch from 'fetch';

export default class UserRepository {
  findById = (id) => fetch(`/users/${id}`, { method: "GET" });
  
  add = (userData) => {
    fetch('/users', {
        method: "POST",
        body: JSON.stringify(userData)
    });
  }
}
