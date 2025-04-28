const config = {
  development: {
    baseUrl: 'http://winbibo.com',
    redirectPwaApp: 'https://games.winbibo.com/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
  staging: {
    baseUrl: 'http://winbibo.com',
    redirectPwaApp: 'https://games.winbibo.com/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
  production: {
    baseUrl: 'http://winbibo.com',
    redirectPwaApp: 'https://games.winbibo.com/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
};

export const baseURL = 'http://winbibo.com';
export const endpoints = {
  GET_ALL_BLOGS: `${baseURL}/getBlog`,
  GET_ALL_SUCCESS_STORIES: `${baseURL}/getSuccessStories`,
  CREATE_CONTACT_US: `${baseURL}/addContact`,
};

let configBasedOnEnv = {};

const env = process.env.NEXT_PUBLIC_ENV_VARIABLE;

configBasedOnEnv = config[env] ? config[env] : config.development;

export default configBasedOnEnv;
