import skillsDAO from "../../dao/skillsDAO.js";

export default class SkillsController {
  static async apiGetSkills(req, res, next) {

    const { skillsList } = await skillsDAO.getSkills();

    let response = {
      skills: skillsList
    }
    res.json(response)
  }
}