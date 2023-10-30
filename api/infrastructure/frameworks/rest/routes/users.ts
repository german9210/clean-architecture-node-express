import express from 'express';
import controller from '../../../../interface/controllers/usersController';

const app = express();

app.get('/:id', controller.getUserById);

// app.post('users/:id', postUser);
export default app;
