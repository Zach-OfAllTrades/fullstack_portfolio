import React from "react";
import { Link } from "react-router-dom";

const NavListItem = (props) => {
    return(
        <li className="nav-item"><Link className="nav-link" exact to={props.path}>{props.text}</Link></li>
    )
}

export default NavListItem;