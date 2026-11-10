import express from "express";
import { getLeaderboard, addLeaderboardEntry } from "../controllers/LeaderboardController.js";

const router = express.Router();

router.get("/", getLeaderboard);
router.post("/", addLeaderboardEntry);

export default router;
