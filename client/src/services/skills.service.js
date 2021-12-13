import http from "../http-common";

class SkillsService {
    getAll(){
        return http.get('/api/skills');
    }
}

export default new SkillsService();