import React from "react"; 
import { useState } from "react";
import ContactRow from "./ContactRow";
import { useEffect } from "react";  



const dummyContacts = [
  { id: 1, name: "R2-D2", phone: "222-222-2222", email: "r2d2@droids.com" },
  { id: 2, name: "C-3PO", phone: "333-333-3333", email: "c3po@droids.com" },
  { id: 3, name: "BB-8", phone: "888-888-8888", email: "bb8@droids.com" },
];







export default function ContactList() {                                                           // Parent Component
  const [contacts, setContacts] = useState(dummyContacts)                                         //lets me see the contacts i put in its STATE
  useEffect(()=>{                                                                                 // hook?
    async function fetchContacts() {                                                              // will fetch our API
      try {                                                                                       //if
        const response = await fetch(
        "https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/users"
      );
        const result = await response.json();
        setContacts(result);
    } catch (error) {                                                                             //else -  fail safe if code fails
        console.error(error);
      }
    }
    fetchContacts()
  },[])                                                                                          //Important to pass useEffect an empty array ( ,[] ) - This will ensure our component will run the effect only once
    
  
  
  return ( 
        <table>
          <thead>
            <tr>
              <th colSpan="3">Contact List</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Name</td>
              <td>Email</td>
              <td>Phone</td>
              </tr>
        {contacts.map((contact) => {
          return <ContactRow key={contact.id} contact={contact} />;                             //For each `contact`, returns a ContactRow component - specifiaclly the keys for the id and name (contact)
        })}
      </tbody>
        </table>
    ); 
}

