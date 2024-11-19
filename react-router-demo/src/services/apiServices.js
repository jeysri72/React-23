import axios from 'axios';

// Base URL for the API
const BASE_URL = 'https://localhost:8000/api/v1/contacts';

// Function to get contacts
export const getContacts = async () => {
  try {
    const response = await axios.get(BASE_URL);
    return response.data;
  } catch (error) {
    console.error('Error fetching contacts:', error);
    throw error;
  }
};

// Function to post new contact
export const postContact = async (data) => {
  try {
    const response = await axios.post(BASE_URL, data);
    return response.data;
  } catch (error) {
    console.error('Error creating contact:', error);
    throw error;
  }
};
