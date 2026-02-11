const app = require("./app");
const sequelize = require("./config/database");

// IMPORTANT: use Render's PORT or fallback to 3000 for local
const PORT = process.env.PORT || 3000;

sequelize
  .sync()
  .then(() => {
    console.log("Database synced");
    app.listen(PORT, () => {
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Database connection failed:", err);
  });
