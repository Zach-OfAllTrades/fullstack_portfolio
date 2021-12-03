import React from "react";
import {
    Route,
    Link,
    Switch
  } from "react-router-dom";
import NavItem from "./components/atoms/NavListItem.js";
import MainNav from "./components/organisms/navigation/MainNav.js";
import Experience from "./views/ExperiencePage.js";  
import Home from "./views/HomePage.js"; 

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
            </Switch>
            </div>
        </div>
      );
}

export default PortfolioSPA;