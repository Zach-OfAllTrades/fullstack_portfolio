import http from "../http-common";

class EducationService {
    getAll(){
        return http.get('/api/education');
    }
}

export default new EducationService();