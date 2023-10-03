import UserModel from './model';

export default class UserRepository {
  findById = (id) => UserModel.findById(id).select('-password');
  
  add = (userData) => {
    const newUser = new UserModel({
      username: userData.getUserName(),
      password: userData.getPassword(),
      email: userData.getEmail()
    });

    return newUser.save();
  }
}
