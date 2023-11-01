import UserService from '../../application/use-cases/users';

const getUserById = async (req, res, next) => {
    try {
        const id = req.params?.id;
        const { usersRepository } = res.locals;
        const user = await new UserService(usersRepository).getUserById(id);

        res.status(200).json(user);
    } catch (error) {
        next(error);
    }
}

export default { getUserById };
