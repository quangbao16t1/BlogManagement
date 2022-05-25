import { Sequelize, DataTypes } from "sequelize";


const RateModel = (sequelize, Sequelize) => {
    const Rates = sequelize.define('rates', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        postId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        rate: {
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
    return Rates;
}
export default RateModel;