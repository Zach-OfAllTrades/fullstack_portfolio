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
        <div>
            {!experience ? "loading..." : experience.map((exp) => { 
                return(
                    <div>
                    
                        <ExperienceItem experience={exp} />
                        <ExperienceDetail experience={exp} />
                    </div>
                )
            })}
            {!education? "...loading" : education.map((edu) => {
                return(
                    <div>
                        <EducationItem education={edu}/>
                        <EducationDetail education={edu}/> 
                    </div>
                )
            })} 
        </div>
    )
}

export default Experience;