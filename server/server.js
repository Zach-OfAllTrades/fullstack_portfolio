import express from "express";
import cors from "cors";
import experience from "./api/routes/experience.route.js";
import education from "./api/routes/education.route.js";
import skills from "./api/routes/skills.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use('/api/experience', experience);
app.use('/api/education', education);
app.use('/api/skills', skills);
app.use("*", (req, res) => res.status(404).json({error: "Page Not Found"}));

export default app;