import UserRepository from "../repositories/user.repository.js";


const UserService = {};

UserService.getAllUsers = UserRepository.getAllUsers();
UserService.getUserById = (id) => UserRepository.getUserById(id);
UserService.createUsers = (user) => UserRepository.createUsers(user);
UserService.updateUser = (id, user) => UserRepository.updateUser(id, user);
UserService.deleteUser = (id) => UserRepository.deleteUser(id);
UserService.searchUser = (search) => UserRepository.searchUsers(search);
UserService.login =  (email, password => UserRepository.login(email, password));


export default UserService;
