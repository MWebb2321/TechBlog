const seedPosts = require("./post-seeds");
const sequelize = require("../../config/connection");

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log("\n----- Database Synced -----\n");
  await seedPosts();
  console.log("\n----- Posts Seeded -----\n");

  process.exit(0);
};

seedAll();
