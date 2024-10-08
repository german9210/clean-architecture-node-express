/**
 * Use case may to have all business logic rules.
 * We can also handling errors here.
 * Increase metrics.
 * Implement logs.
 */

import IUserRepository from "../../interface/contracts/user-repository";

export default class Users {
    private repository: IUserRepository;

    constructor (repository) {
        this.repository = repository;
    }

    getUserById = async (id) => {
        try {
            const user = await this.repository.findById(id);
            return user;
        } catch (error) {
            console.log('Error to get user by id', JSON.stringify(error));
        }
    }
}
