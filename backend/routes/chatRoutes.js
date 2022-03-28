const express = require("express");
const { accessChat, fetchChat } = require("../controllers/chatControllers");

const router = express.Router();
const { protect } = require("../middleware/authMiddleware");

router.route("/").post(protect, accessChat).get(protect, fetchChat);

// router.route("/group").post(protect, createGroupChat);
// router.route("/rename").put(protect, renameGroup);
// router.route("/groupremove").put(protect, removeFromGroup);
// router.route("groupadd").put(protect, addToGroup);

module.exports = router;
