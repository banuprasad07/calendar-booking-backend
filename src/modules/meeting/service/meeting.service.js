const { Op } = require("sequelize");
const Meeting = require("../model/meeting.model");
const User = require("../../user/model/user.model");

async function hasConflict({ userId, startTime, endTime, excludeId }) {
  return Meeting.findOne({
    where: {
      userId,
      ...(excludeId && { id: { [Op.ne]: excludeId } }),
      startTime: { [Op.lt]: endTime },
      endTime: { [Op.gt]: startTime }
    }
  });
}

async function createMeeting(data) {
  const { userId, startTime, endTime } = data;

  if (!userId || !startTime || !endTime) {
    throw { statusCode: 400, message: "userId, startTime and endTime are required" };
  }

  if (new Date(startTime) >= new Date(endTime)) {
    throw { statusCode: 400, message: "startTime must be before endTime" };
  }

  const user = await User.findByPk(userId);
  if (!user) {
    throw { statusCode: 404, message: "User not found" };
  }

  const conflict = await hasConflict({ userId, startTime, endTime });
  if (conflict) {
    throw { statusCode: 400, message: "Time slot already booked" };
  }

  return Meeting.create(data);
}

async function getMeetingById(id) {
  const meeting = await Meeting.findByPk(id);
  if (!meeting) {
    throw { statusCode: 404, message: "Meeting not found" };
  }
  return meeting;
}
async function listMeetings(filters) {
  const where = {};

  if (filters.userId) {
    where.userId = filters.userId;
  }

  if (filters.startDate && filters.endDate) {
    where.startTime = {
      [Op.between]: [new Date(filters.startDate), new Date(filters.endDate)]
    };
  }

  return Meeting.findAll({ where });
}


module.exports = {
  createMeeting,
  getMeetingById,
  listMeetings
};
