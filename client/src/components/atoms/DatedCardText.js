import React from "react";

const DatedCardText = (props) => {

    return(
        <p className="card-text">
            <strong>{props.title}</strong><br/>
            {props.start_date} - {props.end_date}
        </p>
    )
}

export default DatedCardText;