import { PATH_DB } from '../constants/contacts.js';
import { promises as fs } from 'fs';

export const writeContacts = async (updatedContacts) => {
  try {
    const data = JSON.stringify(updatedContacts, null, 2); 
    await fs.writeFile(PATH_DB, data, 'utf-8');
    console.log('Contacts have been written successfully!');
  } catch (error) {
    console.error('Error writing contacts:', error.message);
    throw error; 
  }
};
