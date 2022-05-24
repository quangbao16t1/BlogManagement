import { Sequelize, DataTypes } from "sequelize";

const RoleModel = (sequelize, Sequelize) => {
    const Roles = sequelize.define('roles', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createAt: {
            type: DataTypes.DATE,
            default: Date.now(),
        },
        updateAt: {
            type: DataTypes.DATE,
            default: null
        }
    }, {
        timestamps: false
    });
    return Roles;
}
export default RoleModel;