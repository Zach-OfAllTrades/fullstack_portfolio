import EducationDAO from "../../dao/educationDAO.js"

export default class EducationController {
  static async apiGetEducation(req, res, next) {

    const { educationList } = await EducationDAO.getEducation();

    let response = {
      education: educationList
    }
    res.json(response)
  }
}