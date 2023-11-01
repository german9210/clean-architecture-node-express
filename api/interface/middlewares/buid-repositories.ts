import UserRepository from "infrastructure/databases/mongo-db/users/repository";

export const buildDependencies = (req, res, next) => {
    res.locals.dependencies = {
        usersRepository:  new UserRepository(),
    };
    next();
};
