import React  from "react";
import ContactCard from "./contactCard";
//access props
const ContactList = (props)=>{
    console.log(props);
    // const deletContactHandler =(id)=>{
    //    props.getContactId(id);
    // }
    const renderCotactList = props.contacts.map((contact)=>
    {
        return (
            <div>
                <ContactCard contact={contact} /*clickHandler={deletContactHandler}*//>
            </div>
        )
    })
    return (
        <div>
        {renderCotactList}
        </div>
    )

}
export default ContactList;