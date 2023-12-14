import React from "react";
import 'font-awesome/css/font-awesome.min.css';
// not able to import the images 
// import user.png from "../images/user.png"
const ContactCard= (props)=>{
    const {id,name, email} = props.contact// array destructing 
    return(
        // <div > <img className="u" src={user} alt ="user"/></div>
         <div>
                <div>
                    <div>{name}</div>
                    <div>{email}</div>
                    <i className="fa-solid fa-trash"
                        style={{ color:"red",merginTop: "7px"}}
                        onClick={()=>props.clickHandler(id) }
                    ></i>
                </div>
            </div>
    )
}
export default ContactCard;