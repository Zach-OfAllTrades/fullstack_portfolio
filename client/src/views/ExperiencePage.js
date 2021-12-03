import React, { useState, useEffect } from "react";
import ExperienceService from "../services/experience.service";
import EducationService from "../services/education.service";
import ExperienceItem from "../components/organisms/experience/ExperienceItem";
import ExperienceDetail from "../components/organisms/experience/ExperienceDetail";
import EducationItem from "../components/organisms/education/EducationItem"
import EducationDetail from "../components/organisms/education/EducationDetail"

const Experience = () => {  
    const [experience, setExperience] = useState([]);
    const [education, setEducation] = useState([]);

    useEffect(() => {
        getExperience();
        getEducation();
    }, []);

    const getExperience = () => {
        ExperienceService.getAll()
            .then(response => {
                console.log(response.data.experience);
                setExperience(response.data.experience);
            })
            .catch(e => {
                console.log("Error when getting experience: " + e)
            })
    };

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
            <h1>EXPERIENCE</h1>
            {!experience ? "loading..." : experience.map((exp) => { 
                return(
                    <div className="row">
                        <ExperienceItem key={exp._id} experience={exp} />
                        <ExperienceDetail key={exp._id} experience={exp} />
                    </div>
                )
            })}
            <h1>EDUCATION</h1>
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