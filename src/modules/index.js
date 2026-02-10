const User = require("./user/model/user.model");
const Meeting = require("./meeting/model/meeting.model");

// One User -> Many Meetings
User.hasMany(Meeting, {
  foreignKey: "userId",
  onDelete: "CASCADE"
});

// One Meeting -> One User
Meeting.belongsTo(User, {
  foreignKey: "userId"
});

module.exports = {
  User,
  Meeting
};
