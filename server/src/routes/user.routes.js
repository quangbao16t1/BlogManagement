import express from 'express';
import UserController from '../controllers/user.controller.js';

const userRouter = express.Router();

userRouter.get('/users', UserController.getAllUsers);
userRouter.get('/users/:id', UserController.getUserById);
userRouter.post('/register', UserController.createUser);
userRouter.put('/users/:id', UserController.updateUser);
userRouter.delete('/users/:id', UserController.deleteUser);
userRouter.post('/login', UserController.login);

export default userRouter;