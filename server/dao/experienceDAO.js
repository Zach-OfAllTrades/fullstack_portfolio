let experience

export default class ExperienceDAO {
  static async injectDB(conn) {
    if (experience) {
      return
    }
    try {
      experience = await conn.db(process.env.PORTFOLIO_NS).collection("experience")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in experienceDAO: ${e}`,
      )
    }
  }

  static async getExperience(){
    let query = { "type": "EXPERIENCE_TYPE" };
    let cursor;
    
    try {
      cursor = await experience
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { experienceList: [] }
    }

    const displayCursor = cursor.limit(10);

    try {
      const experienceList = await displayCursor.toArray()

      return { experienceList }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { experienceList: [] }
    }
  }
}