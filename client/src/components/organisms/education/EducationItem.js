import React from "react";
import DatedCard from "../../molecules/DatedCard";

const ExperienceItem = (props) => {

    return(
        <div className="col-lg-4 pb-1">
            <DatedCard item={props.education} title={props.education.area_of_study} header={props.education.institution}/>
        </div>
    )
}

export default ExperienceItem;