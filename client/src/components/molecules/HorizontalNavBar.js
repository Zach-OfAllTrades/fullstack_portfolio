import React, { useEffect } from "react";
import NavListItem from "../atoms/NavListItem";

const HorizontalNavBar = (props) => {
  
    const classes = `navbar navbar-expand ${props.classes}`
    
    useEffect(() => {
      console.log(props.navItems);
    })

    return(
      <nav className={classes}>
        <div>
          <ul className="navbar-nav mr-auto">
              {!props.navItems ? "loading..." : props.navItems.map(navItem => {
                return(
                  <NavListItem path={navItem.path} text={navItem.text} /> 
                )
              })}
          </ul>
        </div>
      </nav>
    )
}

export default HorizontalNavBar;