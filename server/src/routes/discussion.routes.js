import express from "express";
import {
  createDiscussion,
  updateDiscussion,
  deleteDiscussion,
  replyToDiscussion,
} from "../controllers/discussionController.js";

const router = express.Router();

router.post("/", createDiscussion);
router.put("/:id", updateDiscussion);
router.delete("/:id", deleteDiscussion);
router.post("/:id/reply", replyToDiscussion);

export default router;
