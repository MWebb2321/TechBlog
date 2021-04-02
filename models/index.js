const Post = require("./Post");
const User = require("./User");

// Not sure if this is correct

User.hasMany(Post, {
  foreignKey: "user_id",
});

Post.belongsTo(User, {
  foreignKey: "user_id",
});

module.exports = { User, Post };
