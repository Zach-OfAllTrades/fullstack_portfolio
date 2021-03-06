import React from "react";
import {
    Route,
    Switch
  } from "react-router-dom";
import MainNav from "./components/organisms/navigation/MainNav.js";
import Experience from "./views/ExperiencePage.js";  
import Home from "./views/HomePage.js"; 
import SkillsPage from "./views/SkillsPage.js";

const PortfolioSPA = () => {
    return(
        <div>
            <MainNav />
            <div className="content">
            <Switch> 
              <Route exact path={"/"} component={Home} />
              <Route path="/experience">
                <Experience />
              </Route>
              <Route path="/skills">
                <SkillsPage />
              </Route>
            </Switch>
            </div>
        </div>
      );
}

export default PortfolioSPA;