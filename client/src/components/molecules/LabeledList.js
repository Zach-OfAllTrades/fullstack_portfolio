import React from "react";
import ListLabel from "../atoms/ListLabel";
import UnorderedList from "../atoms/UnorderedList";

const LabeledList = (props) => {

    return(
        <div>
            <ListLabel label={props.label} />
            <UnorderedList items={props.items} />      
        </div>
    )
}

export default LabeledList;