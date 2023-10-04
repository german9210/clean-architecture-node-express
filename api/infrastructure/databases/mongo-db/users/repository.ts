import IUserRepository from '../../../../interface/contracts/user-repository';
import UserModel from './model';
import User from '../../../../entities/user';

export default class UserRepository implements IUserRepository {
  findById = async (id) => {
    const user = await UserModel.findById(id);
    if (!user) {
      throw new Error('not found');
    }

    return {
      username: user.username,
      password: user.password,
      email: user.email
    }
  }
  
  add = (userData: User) => {
    const newUser = new UserModel({
      username: userData.username,
      password: userData.password,
      email: userData.email
    });

    return newUser.save();
  }
}
