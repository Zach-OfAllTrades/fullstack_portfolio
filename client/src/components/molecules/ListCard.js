import React from "react";
import LabeledList from "./LabeledList.js";

const ListCard = (props) => {

    return(
        <div key={props.key} className="card">
            <div className="card-body">
                {props.lists.map(list => {
                    return(
                        <LabeledList label={list.label} items={list.items}/>
                    )
                })}               
            </div>
        </div>
    )
}

export default ListCard;