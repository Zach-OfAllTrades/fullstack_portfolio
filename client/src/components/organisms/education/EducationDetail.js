import React from "react";
import LabeledList from "../../molecules/LabeledList";
import ListCard from "../../molecules/ListCard";

const ExperienceDetail = (props) => {

    return(
        <div className="col-lg-8 pb-1">
            {props.education.classes.length == 0 || !props.education.classes ? <div></div> : 
                // <LabeledList label="Relevant Coursework" items={props.education.classes}/>
                <ListCard key={props.key} lists={[
                    {
                        label: "Relevant Coursework",
                        items: props.education.classes
                    }
                ]}/>
            }
        </div>
           
    )
}

export default ExperienceDetail;