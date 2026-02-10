const express = require("express");

const app = express();

app.use(express.json());

// User routes
const userRoutes = require("./modules/user/routes/user.routes");
app.use("/users", userRoutes);


const meetingRoutes = require("./modules/meeting/routes/meeting.routes");
app.use("/meetings", meetingRoutes);


app.get("/", (req, res) => {
  res.send("Calendar Booking API is running");
});

module.exports = app;

