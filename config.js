const config = {
  development: {
    baseUrl: 'http://128.199.17.56:2265',
    redirectPwaApp: 'http://143.110.184.204:8000/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
  staging: {
    baseUrl: 'http://128.199.17.56:2265',
    redirectPwaApp: 'http://143.110.184.204:8000/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
  production: {
    baseUrl: 'http://128.199.17.56:2265',
    redirectPwaApp: 'http://143.110.184.204:8000/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
};

export const baseURL = 'http://128.199.17.56:2265';
export const endpoints = {
  GET_ALL_BLOGS: `${baseURL}/getBlog`,
  GET_ALL_SUCCESS_STORIES: `${baseURL}/getSuccessStories`,
  CREATE_CONTACT_US: `${baseURL}/addContact`,
};

let configBasedOnEnv = {};

const env = process.env.NEXT_PUBLIC_ENV_VARIABLE;

configBasedOnEnv = config[env] ? config[env] : config.development;

export default configBasedOnEnv;
