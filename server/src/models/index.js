import Sequelize from 'sequelize';
import dbConfig from '../configs/db.config.js';
import BookmarkModel from './bookmark.model.js';
import CommentModel from './comment.model.js';
import PostModel from './post.model.js';
import RateModel from './rate.model.js';
import RoleModel from './role.model.js';
import UserModel from './user.model.js';
import dotenv from "dotenv";

dotenv.config();

const sequelize = new Sequelize(process.env.DATABASE, dbConfig.USER, dbConfig.PASSWORD, {
    host: dbConfig.HOST,
    // port: dbConfig.PORT,
    dialect: dbConfig.dialect,
    operatorsAliases: 0,
    pool: {
        max: dbConfig.pool.max,
        min: dbConfig.pool.min,
        acquire: dbConfig.pool.acquire,
        idle: dbConfig.pool.idle
    }
});

const connectDB = {};
connectDB.Sequelize = Sequelize;
connectDB.sequelize = sequelize;

connectDB.users = UserModel(sequelize, Sequelize);
connectDB.roles = RoleModel(sequelize, Sequelize);
connectDB.posts = PostModel(sequelize, Sequelize);
connectDB.comments = CommentModel(sequelize, Sequelize);
connectDB.rates = RateModel(sequelize, Sequelize);
connectDB.bookmarks = BookmarkModel(sequelize, Sequelize);

//users-roles
connectDB.users.belongsTo(connectDB.roles);
connectDB.roles.hasMany(connectDB.users, {foreinKey: 'roleId'} );

//users-posts
connectDB.posts.belongsTo(connectDB.users);
connectDB.users.hasMany(connectDB.posts, {foreinKey: 'userId'} );

//comments-users
connectDB.comments.belongsTo(connectDB.users);
connectDB.users.hasMany(connectDB.comments, {foreinKey: 'userId'} );

//comments-posts
connectDB.comments.belongsTo(connectDB.posts);
connectDB.posts.hasMany(connectDB.comments, {foreinKey: 'postId'} );

//comments-comments
connectDB.comments.belongsTo(connectDB.comments, {as: 'parent', foreignKey: 'parentId'});
connectDB.comments.hasMany(connectDB.comments, {as: 'children', foreignKey: 'parentId'} );

//posts-rates
connectDB.rates.belongsTo(connectDB.posts);
connectDB.posts.hasMany(connectDB.rates, {foreinKey: 'postId'} );

//rates-users
connectDB.rates.belongsTo(connectDB.users);
connectDB.users.hasMany(connectDB.rates, {foreinKey: 'userId'} );

//users-bookmarks
connectDB.bookmarks.belongsTo(connectDB.users);
connectDB.users.hasMany(connectDB.bookmarks, {foreinKey: 'userId'} );

//posts-bookmarks
connectDB.bookmarks.belongsTo(connectDB.posts);
connectDB.posts.hasMany(connectDB.bookmarks, {foreinKey: 'postId'} );

export default connectDB;