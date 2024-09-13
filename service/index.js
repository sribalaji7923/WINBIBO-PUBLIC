import axios from 'axios';
import { getAuthToken } from './utilities';
import { endpoints } from '@/config';

export const getAllBlogs = (data) => {
  let request = axios({
    method: 'GET',
    url: endpoints.GET_ALL_BLOGS,
    headers: {
      Authorization: getAuthToken(),
    },
    data: data,
  });
  return request;
};

export const getAllSuccessStories = (data) => {
  let request = axios({
    method: 'GET',
    url: endpoints.GET_ALL_SUCCESS_STORIES,
    headers: {
      Authorization: getAuthToken(),
    },
    data: data,
  });
  return request;
};

export const addContact = (data) => {
  let request = axios({
    method: 'POST',
    url: endpoints.CREATE_CONTACT_US,
    headers: {
      Authorization: getAuthToken(),
    },
    data: data,
  });
  return request;
};
