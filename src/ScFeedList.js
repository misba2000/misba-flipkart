import React from "react";
import "./BreakBadModule.css";


const ScFeedList = (props) => {
    console.log("props",props);
    return(
        <div className="feed" >
         
           <div><img src={props.image} alt="user.img" className="feed12"/></div> 
           <div><p>{props.name}</p></div>
           <div><p>{props.amount}</p></div>
           <div><p>{props.text}</p></div>       
            </div>
    )
}
export default ScFeedList;