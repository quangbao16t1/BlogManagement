import Message from "../commons/message.js";
import RES from "../commons/status.js";
import UserService from "../services/user.service.js";

const UserController = {};

UserController.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        // res.status(200).json({
        //     success: true,
        //     Users: users
        // })
        RES.success(res, users, Message.success);
    } catch (error) {
        // res.status(500).json({
        //     error: error.message
        // })
        RES.internal(res, error, Message.notFound)
    }
}

UserController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserService.deleteUser(id);
        // res.status(200).json({
        //     success: true,
        //     message: Message.delete,
        // }) 
        RES.success(res, result, Message.delete);
    } catch (error) {
        RES.notFound(res, error, Message.unDelete);
    }
}

UserController.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserService.getUserById(id);
        RES.success(res, result, Message.success);
    } catch (error) {
        RES.notFound(res, error, Message.notFound);
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
            RES.created(res, user, Message.create);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unCreate);
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
            RES.updated(res, Message.unCreate);
        })
        .catch((error) => {
            RES.internal(res, error, Message.unUpdate);
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