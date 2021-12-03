import React from "react";
import ListCard from "../../molecules/ListCard";

const ExperienceDetail = (props) => {
    return(
        <div className="col-lg-8 pb-1">
            <ListCard key={props.key} lists={[
                {
                    label: "Responsibilities",
                    items: props.experience.responsibilities
                },
                {
                    label: "Accomplishments",
                    items: props.experience.accomplishments
                }
            ]}/> 
        </div>
           
    )
}

export default ExperienceDetail;