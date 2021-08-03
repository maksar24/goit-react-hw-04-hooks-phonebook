import React, { useState, useEffect } from "react";
import Form from "./Components/Form/Form";
import { ContactList } from "./Components/ContactList/ContactList";
import { Filter } from "./Components/Filter/Filter";
import { Wrapper } from "./App.styles";
import baseContacts from "./Components/baseContacts.json";

export default function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(window.localStorage.getItem("contacts")) ?? [...baseContacts]
  );
  const [filter, setFilter] = useState("");

  useEffect(() => {
    window.localStorage.setItem("contacts", JSON.stringify(contacts));
  }, [contacts]);

  const getSearchName = (e) => {
    setFilter(e.target.value);
  };

  const removeContact = (id) => {
    setContacts(contacts.filter((el) => el.id !== id));
  };

  const addNewContact = (newContact) => {
    const similarName = contacts.map((el) => el.name);

    if (similarName.includes(newContact.name)) {
      alert(`${newContact.name} is already in contacts`);
    } else {
      setContacts((prevContacts) => [newContact, ...prevContacts]);
    }
  };

  return (
    <Wrapper>
      <h1>Phonebook</h1>
      <Form onSubmit={addNewContact} />
      <h2>Contacts</h2>
      <Filter getSearchName={getSearchName} label="Enter contact name" />
      <ContactList
        options={contacts}
        searchValue={filter}
        onDelete={removeContact}
      />
    </Wrapper>
  );
}
