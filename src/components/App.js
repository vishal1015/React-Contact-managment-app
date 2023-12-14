import React ,{useState,useEffect} from "react";
import {uuid} from 'uuidv4';
// import { BrowserRouter as Router, Switch ,Route, Routes } from "react-router-dom";
import Header from "./Header";
import Addcontact from "./Addcontact";
import ContactList from "./ContactList"
import './App.css';
function App() {
const LOCAL_STORAGE_KEY = "contacts";// key for using local storage 
  // render a list in react 
  //state in functional component by using hooks 
  const [contacts, setContacts]=useState([]);
  const  addcontactHandler = (contact)=> {
    console.log(contact);
    setContacts((prevContacts)=>{
      return [...prevContacts, contact]
      // {id:uuid(), ...contacts} 
    })
  };
  // const removeContactHandler =(id)=>{
  //   console.log("id of elements :",id);
  //     const newContactList = contacts.filter((contact)=>{
  //       return (contact.id !==id);
  //     })
  //     setContacts(newContactList);
  //   };
  useEffect( ()=>{
    // console.log("Fetching data from local storage...");
     const retrivecontacts =  JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
    //  console.log("Retrieved data:", retrivecontacts);
     if(retrivecontacts)setContacts(retrivecontacts);
  },[]);
  // // wheneverv value changes done useEffect is use to render component agian
  useEffect(()=>{
     if(contacts.length)localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(contacts));
  },[contacts]);

  return (
    <div >
      <Header />
      <Addcontact  addcontactHandler={addcontactHandler} />
      <ContactList  contacts={contacts} /*getContactId={removeContactHandler} */ />
    </div>
  );
}
export default App;
