import { Sequelize, DataTypes } from "sequelize";

const PostModel = (sequelize, Sequelize) => {
    const Posts = sequelize.define('posts', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        userId: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        imageCover: {
            type: DataTypes.STRING,
        },
        createAt: {
            type: DataTypes.DATE,
            allowNull: false,
            default: Date.now(),
        },
        updateAt: {
            type: DataTypes.DATE,
            default: null
        }
    }, {
        timestamps: false
    });
    return Posts;
}
export default PostModel;