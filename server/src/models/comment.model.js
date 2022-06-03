import { Sequelize, DataTypes } from "sequelize";

const CommentModel = (sequelize, Sequelize) => {

    const Comments = sequelize.define('comments', {
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
        parentId: {
            type: DataTypes.INTEGER,
            allowNull: true,
        },
        comment: {
            type: DataTypes.STRING,
            allowNull: false
        },
        publish: {
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

    return Comments;
}
export default CommentModel;