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
        },
        updateAt: {
            type: DataTypes.DATE
        }
    }, {
        timestamps: false
    });
    return Roles;
}
export default RoleModel;