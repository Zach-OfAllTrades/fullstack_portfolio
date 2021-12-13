import React, { useState, useEffect } from "react";
import ExperienceService from "../services/experience.service";
import EducationService from "../services/education.service";
import ExperienceList from "../components/organisms/experience/ExperienceList";
import EducationList from "../components/organisms/education/EducationList";
import ExperienceSubNav from "../components/organisms/navigation/ExperienceSubNav";
import {
    Route,
    Switch
  } from "react-router-dom";

const Experience = () => {  
    return(
        <div>
            <ExperienceSubNav />
            <div className="page">
              <Switch> 
                <Route exact path={"/experience"}>
                    <ExperienceList />
                </Route>
                <Route path="/experience/education">
                  <EducationList />
                </Route>
              </Switch>
            </div>
        </div>
    )
}

export default Experience;