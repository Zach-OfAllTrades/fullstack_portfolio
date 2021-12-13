import React from "react";
import HorizontalNavBar from "../../molecules/HorizontalNavBar";

const MainNav = () => {
    const navItems = [
        {path: "/", text: "Home"},
        {path: "/experience", text: "Experience"},
        {path: "/skills", text: "Skills"}
    ]

    return(
        <HorizontalNavBar 
            navClasses="navbar-dark bg-dark nav-item-container" 
            navItems={navItems} 
        />
    )
}

export default MainNav;