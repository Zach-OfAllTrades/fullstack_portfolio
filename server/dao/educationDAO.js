let education

export default class EducationDAO {
  static async injectDB(conn) {
    if (education) {
      return
    }
    try {
      education = await conn.db(process.env.PORTFOLIO_NS).collection("portfolio")
    } catch (e) {
      console.error(
        `Unable to establish a collection handle in educationDAO: ${e}`,
      )
    }
  }

  static async getEducation(){
    let query = { "type": "EDUCATION_TYPE" };
    let cursor;
    
    try {
      cursor = await education
        .find(query)
    } catch (e) {
      console.error(`Unable to issue find command, ${e}`)
      return { educationList: [] }
    }

    const displayCursor = cursor.limit(10);

    try {
      const educationList = await displayCursor.toArray()

      return { educationList }
    } catch (e) {
      console.error(
        `Unable to convert cursor to array or problem counting documents, ${e}`,
      )
      return { educationList: [] }
    }
  }
}