import React from "react";
import "./BreakBadModule.css";
// import image from "./images/Image1.png"


const TopBar = (props) => {
    console.log("props",props);
    return(
        <div className="img12">
             
            <div ><img src={props.image} className="img121" /></div>
          <div> <p>{props.name}</p></div> 
         
        </div>
    );
}
export default TopBar;