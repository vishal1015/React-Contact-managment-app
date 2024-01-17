import React from "react";
import { Link } from "react-router-dom";
import ContactCard from "./contactCard";
import "./App.css"
//access props
const ContactList = (props) => {
  console.log(props);
  const deletContactHandler = (id) => {
    props.getContactId(id);
  };
  // const contacts =[{
  //     id:"1",
  //     "name":"vishal",
  //     "email":"abc@gmail.com"
  // }]
  const renderCotactList = props.contacts.map((contact) => {
    return (
      <div class = "contactcard">
        <ContactCard
          contact={contact}
          clickHandler={deletContactHandler}
          key={contact.id}
        />
      </div>
    );
  });
  return (
    <div>
      <h2>Contact List </h2>
      <Link to="/add">
        <button>ADD Contact</button>
      </Link>
      {renderCotactList}
    </div>
  );
};
export default ContactList;
