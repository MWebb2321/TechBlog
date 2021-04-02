const { Model, DateTypes } = require("/sequelize");
const sequelize = require("../config/connection");
const { DataTypes } = require("sequelize/types");

class Comment extends Model {}

Comment.init({
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrements: true,
  },
  comment: {
    type: DataTypes.STRING,
  },
  post_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "post",
      key: "id",
    },
  },
  user_id: {
    type: DataTypes.INTEGER,
    references: {
      model: "user",
      key: "id",
    },
  },
});
