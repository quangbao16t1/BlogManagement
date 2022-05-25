import connectDB from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auth from "../configs/auth.config.js";

const UserModel = connectDB.users;

const UserService = {};

UserService.getAllUsers = async () => {
    return await UserModel.findAll({
        include: [{
            model: connectDB.roles,
        }]
    });
}

UserService.getUserById = async (userId) => {
    return await UserModel.findOne({
        where: { id: userId },
        include: [{
            model: connectDB.roles,
        }]
    })
}

UserService.updateUser = async (userId, user) => {
    const userUpdate = await UserModel.findOne({ where: { id: userId } });

    if (!userUpdate) throw "User not found!!!";

    if (user.passwordHash) {
        user.passwordHash = bcrypt.hashSync(user.passwordHash, 8);
    }

    Object.assign(userUpdate, user);

    await userUpdate.save();
}

UserService.deleteUser = async (userId) => {
    const userDelete = await UserModel.findOne({ where: { id: userId } });

    if (!userDelete) throw "User not found!!!";

    return await UserModel.destroy({ where: { id: userId } });
}

UserService.createUsers = async (user) => {
    if (await UserModel.findOne({ where: { email: user.email } })) {
        throw `Email  ${user.email} is already taken`;
    }

    const userCreate = new UserModel();

    Object.assign(userCreate, user);

    if (user.passwordHash) {
        userCreate.passwordHash = await bcrypt.hashSync(user.passwordHash, 8);
    }

    await userCreate.save();
}

UserService.login = async (email, password) => {

    const user = await UserModel.findOne({ where: { email: email } });

    console.log(user.passwordHash);
    console.log(user);
    
    if (user && bcrypt.compareSync(password, user.passwordHash)) {
        const token = jwt.sign({ sub: user._id }, Auth.secret, { expiresIn: '7d' });
        return {
            ...user.toJSON(),
            token
        };
    }
}

UserService.searchUsers = async (search) => {
    return await UserModel.findOne({
        where: { lastName: search },
        include: [{
            model: connectDB.roles,
        }]
    })
}

export default UserService;