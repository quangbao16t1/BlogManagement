import UserRepository from "../repositories/user.repository.js";


const UserService = {};

UserService.getAllUsers = () => UserRepository.getAllUsers();
UserService.getUserById = (id) => UserRepository.getUserById(id);
UserService.createUsers = (user) => UserRepository.createUsers(user);
UserService.updateUser = (id, user) => UserRepository.updateUser(id, user);
UserService.deleteUser = (id) => UserRepository.deleteUser(id);
UserService.searchUser = (search) => UserRepository.searchUsers(search);
UserService.login =  (email, password, res) => UserRepository.login(email, password, res);
UserService.refresh_token = (rf_token) => UserRepository.refresh_token(rf_token);
UserService.forgotPassword = (email) => UserRepository.forgotPassword(email);
UserService.resetPassword = (password, id) => UserRepository.resetPassword(password, id);



export default UserService;
