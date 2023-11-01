import express from 'express';
import users from './routes/users';


const httpApp = () => {
    const app = express();

    

    // Entry points
    app.use('/users', users);

    app.listen(8080, () => {
        console.log(`App listening on port ${8080}`);
    });
};

export default httpApp;
