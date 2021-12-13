import React from "react";
import LabeledList from "../../molecules/LabeledList";
import ListCard from "../../molecules/ListCard";

const ExperienceDetail = (props) => {

    const label = ["3.71 GPA - Magna Cum Laude", <br/>, <br/>, "Relevant Coursework"];

    return(
        <div className="col-lg-8 pb-1">
            {props.education.classes.length == 0 || !props.education.classes ? <div></div> : 
                <ListCard key={props.key} lists={[
                    {
                        label: label,
                        items: props.education.classes
                    }
                ]}/>
            }
        </div>
           
    )
}

export default ExperienceDetail;