import "./App.css";

import { useState, useEffect } from "react";

import Form from "./components/contacts/Form";

import List from "./components/contacts/List";
import "/Users/kerimgurbaz/Desktop/my-react-projects/eshop/src/components/contacts/styles.css"

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
    <div className="App">
<div id="container">
  <h1>Contacts</h1>
     <List contacts={contacts} />
     <Form addContact={setContacts} contacts={contacts}/>
</div>
    </div>
  );
}

export default App;
