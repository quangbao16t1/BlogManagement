import Message from "../commons/message.js";
import RES from "../commons/status.js";
import UserService from "../services/user.service.js";
import registerValidator from '../commons/validation.js'
import sendEmail from "../configs/sendEmail.js";
import { generateActiveToken } from "../configs/generateToken.js";
import jwt from 'jsonwebtoken';
import connectDB from "../models/index.js";
import sendSMS from "../configs/sendSMS.js";

const UserController = {};
const UserModel = connectDB.users;

UserController.getAllUsers = async (req, res) => {
    try {
        const users = await UserService.getAllUsers();
        RES.success(res, users, Message.success);
    } catch (error) {
        RES.internal(res, error, Message.notFound)
    }
}

UserController.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;
        const result = await UserService.deleteUser(id);
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

    // const { error } = registerValidator(user);

    // if (error) return res.status(422).json({
    //     error: error.details[0].message
    // });

    const CLIENT_URL = `${process.env.BASE_URL}`

    const active_token = generateActiveToken(user)

    const url = `${CLIENT_URL}/active/${active_token}`

    if (user.email) {
        try {
            sendEmail(user.email, url, "Verify your email address")
            return res.json({ msg: "Success! Please check your email." })
        } catch (error) {
            res.status(400).json({
                messgae: error.message
            })
        }
    } else if (user.phoneNumber) {
        try {
            sendSMS(user.phoneNumber, url, "Verify your phone number")
            return res.json({ msg: "Success! Please check your phone message." })
        } catch (error) {
            res.status(400).json({
                messgae: error.message
            })
        }
    }
    // await UserService.createUsers(user)
    //     .then(() => {
    //         RES.created(res, user, Message.create);
    //     })
    //     .catch((error) => {
    //         RES.internal(res, error, Message.unCreate);
    //     })
}

UserController.activeUser = async (req, res) => {
    try {
        const { active_token } = req.body

        const decoded = jwt.verify(active_token, `${process.env.ACTIVE_TOKEN_SECRET}`)

        if (!decoded) return res.status(400).json({ msg: "Invalid authentication." })

        const user = new UserModel(decoded)

        await UserService.createUsers(user)
            .then(() => {
                RES.created(res, user, "Account has been activated!");
            })
            .catch((error) => {
                RES.internal(res, error, Message.unCreate);
            })

    } catch (err) {
        let errMsg;

        if (err.code === 11000) {
            errMsg = Object.keys(err.keyValue)[0] + " already exists."
        } else {
            let name = Object.keys(err.errors)[0]
            errMsg = err.errors[`${name}`].message
        }

        return res.status(500).json({ msg: errMsg })
    }
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
    await UserService.login(email, passwordHash, res)
        .then(user => user ? res.json({ result: user }) : res.status(400).json({ message: Message.loginValid }))
        .catch(error => {
            console.log(error);
        })
}

UserController.logout = async (req, res) => {
    try {
        res.clearCookie('refreshtoken', { path: `/refresh_token` })
        // res.clearCookie('refreshtoken', { path: `/` })
        return res.json({ msg: "Logged out!" })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

UserController.refreshToken = async (req, res) => {
    try {
        const rf_token = req.cookies.refreshtoken

        if (!rf_token) return res.status(400).json({ msg: "Please login now!" })
        const result = await UserService.refresh_token(rf_token);

        return res.status(200).json({ active_token: result })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

UserController.forgotPassword = async (req, res) => {
    try {
        const { email } = req.body;

        const result = await UserService.forgotPassword(email);

        res.json({ msg: "Re-send the password, please check your email." })

    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

UserController.resetPassword = async (req, res) => {
    try {
        const { passwordHash } = req.body;
        const id = req.params.id;
        console.log(id)
        await UserService.resetPassword(passwordHash, id)
            .then(() => {
                res.json({ msg: "Password successfully changed!" })
            });
    } catch (err) {
        return res.status(500).json({ msg: err.message })
    }
}

export default UserController;