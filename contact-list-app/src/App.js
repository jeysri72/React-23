// src/App.js
import React, { useState, useEffect } from 'react';
import { contacts as initialContacts } from './contactsData'; // Load contacts from contactsData.js as initialContacts 
import ContactList from './components/ContactList';
import SearchBar from './components/SearchBar';
// SELECT c.id, c.name, c.email, c.phone FROM contacts c WHERE c.name LIKE '%John%';
// contacts - array of objects - contactsData.js 

const App = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredContacts, setFilteredContacts] = useState(initialContacts);

  useEffect(() => {
    const results = initialContacts.filter(contact =>
      contact.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredContacts(results);
  }, [searchQuery]);

  return (
    <div className="app">
      <h1>Contact List</h1>
      <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <ContactList contacts={filteredContacts} />
    </div>
  );
};

export default App;
