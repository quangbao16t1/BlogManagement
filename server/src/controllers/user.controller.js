import connectDB from "../models/index.js";
import UserService from "../services/user.service.js";

const UserController = {};

UserController.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        res.status(200).json({
            success: true,
            Users: users
        })
    } catch (error) {
        res.status(500).json({
            error: error.message
        })
    }
}

UserController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserService.deleteUser(id);
        res.status(200).json({
            success: true,
            message: "DELETE successfully!!!!!",
        }) 
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

UserController.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserService.getUserById(id);
        res.status(200).json({
            success: true,
            message: "successfully!!!!!",
            User: result
        }) 
    } catch (error) {
        res.status(404).json({
            error: error.message
        })
    }
}

UserController.createUser = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        passwordHash: req.body.passwordHash,
        roleId: req.body.roleId,
        createAt: Date.now(),
    }
    await UserService.createUsers(user)
        .then(() => {
            res.status(201).json({
                success: true,
                message: `Create User successfully!!!`,
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Can't create User!!!",
                error: error.message
            })
        })
}

UserController.updateUser = async (req, res) => {
    const userUpdate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        passwordHash: req.body.passwordHash,
        roleId: req.body.roleId,
        updateAt: Date.now(),
    }

    const id = req.params.id;

    await UserService.updateUser(id, userUpdate)
        .then(() => {
            res.status(200).json({
                success: true,
                message: `Update User successfully!!!`,
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: "Can't Update User!!!",
                error: error.message
            })
        })
}

UserController.login = async (req, res) => {

    const email = req.body.email;
    const password = req.body.password;
    await UserService.login(email, password)
        .then(user => user ? res.json({ success: true, User: user, }) : res.status(400).json({ message: 'Username or password is incorrect' }))
        .catch(error => {
            console.log(error);
        })
}


export default UserController;