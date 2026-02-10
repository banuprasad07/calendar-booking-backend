const app = require("./app");
const sequelize = require("./config/database");

// IMPORTANT: load models + associations
require("./modules");

const PORT = 3000;

sequelize.sync()
  .then(() => {
    console.log("Database synced");

    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("DB sync error:", err);
  });

