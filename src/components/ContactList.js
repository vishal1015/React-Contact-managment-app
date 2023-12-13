import React  from "react";
import ContactCard from "./contactCard";
//access props
const ContactList = (props)=>{
    console.log(props);
    const renderCotactList = props.contacts.map((contact)=>
    {
        return (
        <ContactCard contact={contact}/>
        )
    })
    return (
        <div>
        {/* reference variable in jsx */}
        {renderCotactList}
       </div>
    )

}
export default ContactList;