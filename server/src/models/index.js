import Sequelize from 'sequelize';
import dbConfig from '../configs/db.config.js';
import BookmarkModel from './bookmark.model.js';
import CommentModel from './comment.model.js';
import PostModel from './post.model.js';
import RateModel from './rate.model.js';
import RoleModel from './role.model.js';
import UserModel from './user.model.js';

const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
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

connectDB.users.hasOne(connectDB.roles, {foreinKey: 'roleId'});
connectDB.roles.belongsTo(connectDB.users);

export default connectDB;