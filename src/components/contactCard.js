import React from "react";
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
                    <i
                    style={{background:"red"}}>⌚</i>
                </div>
            </div>
    )
}
export default ContactCard;