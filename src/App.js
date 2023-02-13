import "./App.css";
import { useState, useEffect } from "react";
import Form from "./components/contacts/Form";

import List from "./components/contacts/List";

function App() {

  const [contacts, setContacts] =useState([]);

  useEffect(()=>{
    console.log(contacts)
  },[contacts])

  return (
    <div className="App">
 
     <List/>
     <Form addContact={setContacts} contacts={contacts}/>
    </div>
  );
}

export default App;
