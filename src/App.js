import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import 'bootstrap/dist/css/bootstrap.css';
import { v4 as uuidv4 } from "uuid";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";
import Header from "./components/Header";
import Addcontact from "./components/Addcontact";
import ContactList from "./components/ContactList";
import ContactDetail from "./components/ContactDetail";
import LoginPage from "./components/Login";
import SignUpPage from "./components/Signup";
import "./App.css";
function App() {
  const LOCAL_STORAGE_KEY = "contacts"; // key for using local storage
  // render a list in react
  //state in functional component by using hooks
  const [contacts, setContacts] = useState([]);
  const addcontactHandler = (contact) => {
    //   console.log(contact);
    // setContacts( [...contacts,{ id:uuidv4(), ...contact}] )
    const newContact = { id: uuidv4(), ...contact };
    console.log("New Contact:", newContact);
    setContacts([...contacts, newContact]);
  };
  const removeContactHandler = (id) => {
    console.log("id of elements :", id);

    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(newContactList);
  };
  useEffect(() => {
    // console.log("Fetching data from local storage...");
    const retrivecontacts = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //  console.log("Retrieved data:", retrivecontacts);
    if (retrivecontacts) setContacts(retrivecontacts);
  }, []);
  // // wheneever value changes done useEffect is use to render component agian
  useEffect(() => {
    if (contacts.length)
      localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  }, [contacts]);

  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<SignUpPage />} />
          <Route
            path="/home"
            element={
              <ContactList
                contacts={contacts}
                getContactId={removeContactHandler}
              />
            }
          />
          <Route path="/login" element={<LoginPage />} />
          <Route
            path="/add"
            element={<Addcontact addcontactHandler={addcontactHandler} />}
          />
          <Route path="/contact/:id" element={<ContactDetail />} />
          {/* one way to pass props in a routed componet making a function ,render i also see but i am using element (to understand react lifecycle is very important ) */}
          {/* <Addcontact  addcontactHandler={addcontactHandler} /> */}
          {/* <ContactList  contacts={contacts} getContactId={removeContactHandler} /> */}
        </Routes>
      </Router>
    </div>
  );
}
export default App;

//Programmatically Route
