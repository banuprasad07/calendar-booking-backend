const express = require("express");
const router = express.Router();
const meetingController = require("../interface/meeting.controller");

// ORDER MATTERS
router.post("/", meetingController.createMeeting);
router.get("/", meetingController.listMeetings);
router.get("/:id", meetingController.getMeeting);

module.exports = router;
