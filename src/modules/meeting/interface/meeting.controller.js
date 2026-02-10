const meetingService = require("../service/meeting.service");

async function createMeeting(req, res) {
  try {
    const meeting = await meetingService.createMeeting(req.body);
    res.status(201).json(meeting);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function getMeeting(req, res) {
  try {
    const meeting = await meetingService.getMeetingById(req.params.id);
    res.status(200).json(meeting);
  } catch (err) {
    res.status(err.statusCode || 500).json({ message: err.message });
  }
}

async function listMeetings(req, res) {
  try {
    const meetings = await meetingService.listMeetings(req.query);
    res.status(200).json(meetings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}

module.exports = {
  createMeeting,
  getMeeting,
  listMeetings
};
