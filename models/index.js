const User = require("./User");
const Post = require("./Post");
const Comment = require("/Comment");

User.hasMany(Post, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

Post.hasMany(Comment, {
  foreignKey: "post_id",
});

Comment.belongsTo(Post, {
  foreignKey: "post-id",
});

User.hasMany(Comment, {
  foreignKey: "user_id",
  onDelete: "CASCADE",
});

Comment.belongsTo(User, {
  foreignKey: "user-id",
});

Post.hasMany(Comment, {
  foreignKey: "post-id",
});

module.exports = { User, Post };
