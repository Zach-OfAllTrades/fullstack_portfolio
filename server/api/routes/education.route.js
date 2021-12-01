import express from "express";
import EducationCtrl from "../controllers/education.controller.js"

const router = express.Router();

router.route('/').get(EducationCtrl.apiGetEducation);

export default router;