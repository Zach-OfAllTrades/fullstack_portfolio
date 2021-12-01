import http from "../http-common";

class ExperienceService {
    getAll(){
        return http.get('/api/experience');
    }
}

export default new ExperienceService();