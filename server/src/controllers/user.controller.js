import Message from "../commons/message.js";
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
            message: Message.delete,
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
            User: result
        }) 
    } catch (error) {
        res.status(404).json({
            message: Message.notFound(id),
            error: error.message
        })
    }
}

UserController.createUser = async (req, res) => {
    const user = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        passwordHash: req.body.passwordHash,
        address: req.body.address,
        roleId: req.body.roleId,
        createAt: Date.now(),
    }
    await UserService.createUsers(user)
        .then(() => {
            res.status(201).json({
                success: true,
                message: Message.create,
            })
        })
        .catch((error) => {
            res.status(400).json({
                message: Message.unCreate,
                error: error.message
            })
        })
}

UserController.updateUser = async (req, res) => {
    const userUpdate = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        gender: req.body.gender,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        roleId: req.body.roleId,
        updateAt: Date.now(),
    }

    const id = req.params.id;

    await UserService.updateUser(id, userUpdate)
        .then(() => {
            res.status(200).json({
                success: true,
                message: Message.update,
            })
        })
        .catch((error) => {
            res.status(500).json({
                message: Message.unUpdate,
                error: error.message
            })
        })
}

UserController.login = async (req, res) => {

    const email = req.body.email;
    const passwordHash = req.body.passwordHash;
    await UserService.login(email, passwordHash)
        .then(user => user ? res.json({ success: true, User: user, }) : res.status(400).json({ message: Message.loginValid }))
        .catch(error => {
            console.log(error);
        })
}


export default UserController;