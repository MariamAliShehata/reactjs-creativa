import React from "react";

const FunctionalProps = (props) =>{
    return(
        <div>
            <h2>The functional props: </h2>
            
            <h3>Hello {props.fname} {props.lname ? props.lname : null}</h3>
            {props.children}
            <h3>Your collage email is  {props.email ? props.email : null}</h3>
            <h3>Your ID is  {props.id ? props.id : null}</h3>
    
        </div>
    );

}

export default FunctionalProps;