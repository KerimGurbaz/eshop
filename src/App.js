import "./App.css";

import { useState, useEffect } from "react";

import Form from "./components/contacts/Form";

import List from "./components/contacts/List";

function App() {

  const [contacts, setContacts] =useState([
    {
    fullname:"Kerim",
    phone_number:"029273"
    },
    {
    fullname:"Ayse",
    phone_number:"124123"
    }
    ,
    {
    fullname:"Damla",
    phone_number:"937464"
    }
]);

  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (
    <div>
 
     <List contacts={contacts}/>
     <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default App;
