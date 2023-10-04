import User from '../../entities/user';

export default interface IUserRepository {
    findById (id: string): Promise<User>;
    findById (userData: User): void;
}
