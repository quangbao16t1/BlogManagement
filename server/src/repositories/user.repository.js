import connectDB from "../models/index.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import Auth from "../configs/auth.config.js";
import { generateRefreshToken } from "../configs/generateToken.js";
import sendEmail from "../configs/sendEmail.js";

const UserModel = connectDB.users;

const UserRepository = {};

UserRepository.getAllUsers = async () => {
    return await UserModel.findAll({
        include: [{
            model: connectDB.roles,
        }]
    });
}

UserRepository.getUserById = async (userId) => {
    return await UserModel.findOne({
        where: { id: userId },
        include: [{
            model: connectDB.roles,
        }]
    })
}

UserRepository.updateUser = async (userId, user) => {
    const userUpdate = await UserModel.findOne({ where: { id: userId } });

    if (!userUpdate) throw "User not found!!!";

    if (user.passwordHash) {
        user.passwordHash = bcrypt.hashSync(user.passwordHash, 8);
    }

    Object.assign(userUpdate, user);

    await userUpdate.save();
}

UserRepository.deleteUser = async (userId) => {
    const userDelete = await UserModel.findOne({ where: { id: userId } });

    if (!userDelete) throw "User not found!!!";

    return await UserModel.destroy({ where: { id: userId } });
}

UserRepository.createUsers = async (user) => {

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

UserRepository.login = async (email, password, res) => {

    const user = await UserModel.findOne({ where: { email: email } });

    if (!user) return;

    if (user && bcrypt.compareSync(password, user.passwordHash)) {

        const token = jwt.sign({ sub: user.id }, Auth.secret, { expiresIn: '7d' });

        const refresh_token = jwt.sign({ sub: user.id }, Auth.secret, { expiresIn: '3d' });

        res.cookie("refreshtoken", refresh_token, {
            httpOnly: true,
            path: `/refresh_token`,
            maxAge: 3 * 24 * 60 * 60 * 1000 // 3days
        })

        return {
            user,
            token
        };
    }
}

UserRepository.refresh_token = async (rf_token) => {

    const decoded = jwt.verify(rf_token, Auth.secret)
    if (!decoded.id) throw "Please login now!";

    const user = await UserModel.findOne({ where: { id: decoded.id } });
    if (!user) throw "This account does not exist.";

    const access_token = jwt.sign({ sub: user.id }, Auth.secret, { expiresIn: '7d' });
    console.log(access_token);

    return access_token;
}

UserRepository.searchUsers = async (search) => {
    return await UserModel.findOne({
        where: { lastName: search },
        include: [{
            model: connectDB.roles,
        }]
    })
}

UserRepository.forgotPassword = async (email) => {
    try {
        const user = await UserModel.findOne({ where: { email: email } });
        if (!user) throw "Email does not exits!!!";

        const access_token = jwt.sign({ sub: user.id }, Auth.secret, { expiresIn: '7d' });
        const url = `${process.env.BASE_URL}/users/reset/${access_token}`;
        sendEmail(email, url, "RESET YOUR PASSWORD");
    } catch (error) {
        console.log(error)
    }
}

UserRepository.resetPassword = async (password, userId) => {

    const passwordHash = bcrypt.hashSync(password, 8);

    const userUpdate = await UserModel.findOne({ where: { id: userId } });

    if (!userUpdate) throw "User not found!!!";

    userUpdate.passwordHash = passwordHash;

    await userUpdate.save();
}

export default UserRepository;