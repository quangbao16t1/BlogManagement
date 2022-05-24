import { Sequelize, DataTypes } from "sequelize";

const BookmarkModel = (sequelize, Sequelize) => {

    const Bookmarks = sequelize.define('bookmarks', {
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
        note: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        createAt: {
            type: DataTypes.DATE,
        },
        updateAt: {
            type: DataTypes.DATE
        }
    });

    return Bookmarks;
}
export default BookmarkModel;