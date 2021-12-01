import React from "react";
import DatedCard from "../../molecules/DatedCard";

const ExperienceItem = (props) => {

    return(
        <div className="col-lg-4 pb-1">
            <DatedCard item={props.experience} title={props.experience.title} header={props.experience.company}/>
        </div>
    )
}

export default ExperienceItem;