import "./BreakBadModule.css"
import React from "react";
import images from "./images/flip.JPG";
import image from "./images/mike.JPG";




function BreakBad(props) {
   console.log("props",props);
return (
    <div >
           <div className="topbar">
               <img src="https://static.thenounproject.com/png/2292434-200.png" alt="flipkart" className="menu"/>
               <img src={images} alt="link_Image" className="img1"/>

               <input type="text" placeholder="Search for products, brands and more" className="in1"/>
               <img src={image} alt="user" className="mike1"/>
                  <p className="log">Login</p>
                 <button className="bu1"><b>Login</b></button>
               <form className="fr1">
                   <label for="More">More</label>
                   <select name="more" id="more" className="op1" >
                             <option value="{}" ></option>
                   </select>
               </form>
               
           </div>
         
    </div>
);
}

export default BreakBad;