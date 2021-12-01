import ExperienceDAO from "../../dao/experienceDAO.js"

export default class ExperienceController {
  static async apiGetExperience(req, res, next) {

    const { experienceList } = await ExperienceDAO.getExperience();

    let response = {
      experience: experienceList
    }
    res.json(response)
  }
}