import React from "react";
import 'font-awesome/css/font-awesome.min.css';
import { useLocation } from "react-router-dom";
import { useNavigate } from 'react-router-dom';
// not able to import the images 
import userphoto from "../images/user.png"
const ContactDetail= ()=>{
    const navigate = useNavigate();
    const location = useLocation();
    // const receiveddata= location.state;
   const {name,email} = location.state;
    // console.log(receiveddata);
    // console.log(receiveddata.name);
    // console.log(props);
    return (
       <>
       <div>
           <div>
            <div>
                <img src={userphoto} alt="user" style={{width:'50px',height:'50px'}}></img>
                <div>
                    <div>{name}</div>
                    <div>{email}</div>
                </div>
            </div>
            <div><button onClick={()=>{navigate('/');}}>Back to contact list </button></div>
           </div>
       </div>
       </>
    )
}
export default ContactDetail;