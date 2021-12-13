let skills

export default class SkillsDAO {
  static async injectDB(conn) {
    if (skills) {
      return
    }
    try {
      skills = await conn.db(process.env.PORTFOLIO_NS).collection("technologies")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in skillDAO: ${e}`,
      )
    }
  }

  static async getSkills(){
    let query = { "type": "SKILL_TYPE" };
    let cursor;
    
    try {
      cursor = await skills
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { skillsList: [] }
    }

    const displayCursor = cursor.limit(10);

    try {
      const skillsList = await displayCursor.toArray()

      return { skillsList }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { skillsList: [] }
    }
  }
}