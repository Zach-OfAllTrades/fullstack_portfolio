import React from "react";
import LabeledList from "../../molecules/LabeledList";

const ExperienceDetail = (props) => {

    return(
        <div className="col-lg-8 pb-1">
            <LabeledList label="Responsibilities" items={props.experience.responsibilities}/>
            <LabeledList label="Accomplishments" items={props.experience.accomplishments}/>
        </div>
           
    )
}

export default ExperienceDetail;