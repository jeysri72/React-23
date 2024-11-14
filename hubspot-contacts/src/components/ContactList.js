// src/components/ContactList.js
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ContactList = () => {
  const [contacts, setContacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchContacts = async () => {
      try {
        const response = await axios.get('http://localhost:5000/api/contacts');
        setContacts(response.data.results || []);
        setLoading(false);
      } catch (err) {
        setError('Error fetching contacts');
        setLoading(false);
      }
    };

    fetchContacts();
  }, []);

  if (loading) return <p>Loading contacts...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <h1>Contact List</h1>
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <h3>{contact.properties.firstname} {contact.properties.lastname}</h3>
            <p>Email: {contact.properties.email}</p>
            <p>Phone: {contact.properties.phone}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
