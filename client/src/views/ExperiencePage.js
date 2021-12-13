import React from "react";
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