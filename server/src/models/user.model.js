import { DataTypes, Sequelize } from "sequelize";


const Users = (sequelize, Sequelize) => {
  const UserModel  = sequelize.define('users', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        firstName: {
            type: DataTypes.STRING(45),
            allowNull: false,
            // validate:
        },
        lastName: {
            type: DataTypes.STRING(45),
            allowNull: false
        },
        email: {
            type: DataTypes.STRING,
            unique: true,
            validate:{
                isEmail : true
            }
        },
        phoneNumber: {
            type: DataTypes.STRING,
        },
        passwordHash: {
            type: DataTypes.STRING
        },
        roleId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        createAt: {
            type: DataTypes.DATE,
        },
        updateAt: {
            type: DataTypes.DATE
        }
    },{
        timestamps: false
    });

    return UserModel;
} 

export default Users;