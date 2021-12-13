import React from "react";
import NavListItem from "../atoms/NavListItem";

const HorizontalNavBar = (props) => {
  
    const navClasses = `navbar navbar-expand ${props.navClasses}`
    const listClasses = `${props.listClasses}`

    return(
      <nav className={navClasses}>
        <div className={listClasses}>
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