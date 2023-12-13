import React from "react";
import Header from "./Header";
import Addcontact from "./Addcontact";
import ContactList from "./ContactList"
import './App.css';
function App() {

  // render a list in react 
  const contacts = [
    {
      id:"1",
      name:"vishal",
      email:"visal@gmail.com"
    },
        {
      id:"2",
      name:"vishal",
      email:"visal@gmail.com"
    }
  ]
  return (
    <div >
    <Header />
    <Addcontact />
    {/* //props to pass data in contact list  from parent to child  */}
    <ContactList    contacts={contacts}/>
    </div>
  );
}
export default App;
