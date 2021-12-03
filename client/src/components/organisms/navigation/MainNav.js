import React, { useEffect, useState } from "react";
import HorizontalNavBar from "../../molecules/HorizontalNavBar";

const MainNav = () => {
    const navItems = [
        {path: "/", text: "Home"},
        {path: "/experience", text: "Experience"}
    ]

    return(
        <HorizontalNavBar classes="navbar-dark bg-dark" navItems={
            [
                {path: "/", text: "Home"},
                {path: "/experience", text: "Experience"}
            ]
        } />
    )
}

export default MainNav;