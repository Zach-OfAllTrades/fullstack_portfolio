import express from "express";
import SkillsCtrl from "../controllers/skills.controller.js";

const router = express.Router();

router.route('/').get(SkillsCtrl.apiGetSkills);

export default router;