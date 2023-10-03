import UserService from '../../application/use-cases/users';

const getUserById = (req, res, next) => {
    try {
        const id = req.params?.id;
        let usersRepository;
        const user = new UserService(usersRepository).getUserById(id);

        res.status(200).send(user);
    } catch (error) {
        next(error);
    }
}

export default { getUserById };
