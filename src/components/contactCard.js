import React from "react";
import { useNavigate} from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';
// not able to import the images 
import userphoto from "../images/user.png"
const ContactCard= (props)=>{
    const {id,name, email} = props.contact// array destructing 
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate(`/contact/${id}`, {state:props.contact});
    };
    return(
        // <div > <img className="u" src={user} alt ="user"/></div>
            <div>
                <div>
                    <img src={userphoto} alt=""style={{width:'50px',height:'50px'}} />
                    <div onClick={handleClick}>{name}</div>
                    <div onClick={handleClick}>{email}</div>
                    
                    <i className="fa-solid fa-trash"
                        style={{ color:"red", merginTop:"7px"}}
                        onClick={()=>props.clickHandler(id)}
                    ></i>
                </div>
            </div>
    )
}
export default ContactCard;