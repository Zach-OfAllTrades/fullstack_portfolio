import express from "express";
import ExperienceCtrl from "../controllers/experience.controller.js"

const router = express.Router();

router.route('/').get(ExperienceCtrl.apiGetExperience);

export default router;