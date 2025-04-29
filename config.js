const config = {
  development: {
    baseUrl: 'https://winbibo.com',
    redirectPwaApp: 'https://games.winbibo.com/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
  staging: {
    baseUrl: 'https://winbibo.com',
    redirectPwaApp: 'https://games.winbibo.com/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
  production: {
    baseUrl: 'https://winbibo.com',
    redirectPwaApp: 'https://games.winbibo.com/login',
    api: {
      baseUrl: 'api-baseurl',
    },
  },
};

export const baseURL = 'https://games.winbibo.com';
export const endpoints = {
  CREATE_CONTACT_US: `https://games.winbibo.com/api/v2/contact-us`,
};


let configBasedOnEnv = {};

const env = process.env.NEXT_PUBLIC_ENV_VARIABLE;

configBasedOnEnv = config[env] ? config[env] : config.development;

export default configBasedOnEnv;
