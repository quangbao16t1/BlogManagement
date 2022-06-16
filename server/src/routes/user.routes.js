import express from 'express';
import UserController from '../controllers/user.controller.js';
import verifyToken from '../middlewares/verifyToken.js';

const userRouter = express.Router();

userRouter.get('/users', UserController.getAllUsers);
userRouter.get('/users/:id', UserController.getUserById);
userRouter.post('/register', UserController.createUser);
userRouter.put('/users/:id', UserController.updateUser);
userRouter.delete('/users/:id', UserController.deleteUser);
userRouter.post('/login', UserController.login);
userRouter.post('/users/active', UserController.activeUser);
userRouter.get('/logout', UserController.logout);
userRouter.get('/refresh_token', UserController.refreshToken);
userRouter.post('/users/forgot', UserController.forgotPassword);
userRouter.post('/users/reset/:id', verifyToken, UserController.resetPassword);


export default userRouter;