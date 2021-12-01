import React from "react";

const UnorderedList = (props) => {

    return(
        <ul>
            {props.items.map(item => {
                return(
                    <li>{item}</li>
                )
            })}    
        </ul>          
    )
}

export default UnorderedList;