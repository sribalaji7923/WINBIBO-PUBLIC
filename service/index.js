import axios from 'axios'; 
import { endpoints } from '@/config';

export const addContact = (data) => {
  let request = axios({
    method: 'POST',
    url: endpoints.CREATE_CONTACT_US, 
    data: data,
  });
  return request;
};
