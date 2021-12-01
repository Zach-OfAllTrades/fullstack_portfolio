import React from "react";
import CardHeader from "../atoms/CardHeader.js";
import DatedCardText from "../atoms/DatedCardText";

const DatedCard = (props) => {

    return(
        <div key={props.item._id} className="card">
            <div className="card-body">
                <CardHeader header={props.header} />
                <DatedCardText title={props.title} start_date={props.item.start_date} end_date={props.item.end_date} />
            </div>
        </div>
    )
}

export default DatedCard;