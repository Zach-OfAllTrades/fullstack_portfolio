import React, { useEffect, useState } from "react";
import skillsService from "../services/skills.service";
import * as d3 from "d3";

const SkillsPage = () => {
    const [skills, setSkills] = useState([]);

    useEffect(() => {
        getSkills();
    }, []);

    const getSkills = () => {
        skillsService.getAll()
            .then(response => {
                console.log(response.data.skills);
                setSkills(response.data.skills);
            })
            .catch(e => {
                console.log("Error when getting skills: " + e)
            })
    };

    const chart = d3.tree(skills, {
        label: s => s.main_skill
    })

    return(
        <div>
            {chart}
        </div>
    );
}

export default SkillsPage;