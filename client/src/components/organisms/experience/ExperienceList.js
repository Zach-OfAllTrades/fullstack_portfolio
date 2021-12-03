import React, { useState, useEffect } from "react";
import ExperienceService from "../../../services/experience.service"
import ExperienceItem from "./ExperienceItem";
import ExperienceDetail from "./ExperienceDetail";

const ExperienceList = () => {  
    const [experience, setExperience] = useState([]);

    useEffect(() => {
        getExperience();
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

    return(
        <div className="album py-5">
            {!experience ? "loading..." : experience.map((exp) => { 
                return(
                    <div className="row">
                        <ExperienceItem key={exp._id} experience={exp} />
                        <ExperienceDetail key={exp._id} experience={exp} />
                    </div>
                )
            })}
        </div>
    )
}

export default ExperienceList;