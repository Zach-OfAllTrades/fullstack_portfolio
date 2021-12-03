import React, { useState, useEffect } from "react";
import EducationService from "../../../services/education.service";
import EducationItem from "./EducationItem"
import EducationDetail from "./EducationDetail"

const Experience = () => {  
    const [education, setEducation] = useState([]);

    useEffect(() => {
        getEducation();
    }, []);
    const getEducation = () => {
        EducationService.getAll()
        .then(response => {
            console.log(response.data.education);
            setEducation(response.data.education);
        })
        .catch(e => {
            console.log("Error when getting education: " + e)
        })
    };  

    return(
        <div className="album py-5">
            {!education? "...loading" : education.map((edu) => {
                return(
                    <div className="row">
                        <EducationItem key={edu._id} education={edu}/>
                        <EducationDetail key={edu._id} education={edu}/> 
                    </div>
                )
            })} 
        </div>
    )
}

export default Experience;