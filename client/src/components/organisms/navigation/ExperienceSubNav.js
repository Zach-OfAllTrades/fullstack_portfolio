import React, { useEffect, useState } from "react";
import HorizontalNavBar from "../../molecules/HorizontalNavBar";

const ExperienceSubNav = () => {
    const navItems = [
        {path: "/experience", text: "Experience"},
        {path: "/experience/education", text: "Education"}
    ]

    return(
        <HorizontalNavBar classes="navbar-light bg-light" navItems={navItems} />
    )
}

export default ExperienceSubNav;