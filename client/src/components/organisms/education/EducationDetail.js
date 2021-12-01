import React from "react";
import LabeledList from "../../molecules/LabeledList";

const ExperienceDetail = (props) => {

    return(
        <div className="col-lg-8 pb-1">
            <LabeledList label="Relevant Coursework" items={props.education.classes}/>
        </div>
           
    )
}

export default ExperienceDetail;