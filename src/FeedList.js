import React from "react";
import "./BreakBadModule.css";


const FeedList = (props) => {
    console.log("props",props);
    return(
        <div className="img21" >
         
           <div><img src={props.image} alt="user" className="img211"/></div> 
           <div><p>{props.name}</p></div>
           <div><p>{props.amount}</p></div>
           <div><p>{props.text}</p></div>       
            </div>
    )
}
















export default FeedList;