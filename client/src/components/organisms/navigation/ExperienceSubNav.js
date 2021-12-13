import React from "react";
import HorizontalNavBar from "../../molecules/HorizontalNavBar";

const ExperienceSubNav = () => {
    const navItems = [
        {path: "/experience", text: "Professional"},
        {path: "/experience/education", text: "Education"}
    ]

    return(
        <HorizontalNavBar 
            listClasses="sub-nav" 
            navClasses="navbar-light bg-light" 
            navItems={navItems} 
        />
    )
}

export default ExperienceSubNav;