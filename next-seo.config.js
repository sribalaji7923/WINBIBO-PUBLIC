import config from 'config'

export default {
  titleTemplate: '%s | Winbibo',
  defaultTitle: 'Winbibo – Play Real-Cash Games Online',
  description:
    'Play Rock-Paper-Scissors, 2048 & Fantasy Cricket for real cash—fast, fair & fun!',
  canonical: config.baseUrl,
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: config.baseUrl,
    site_name: 'Winbibo',
    title: 'Winbibo – Play Real-Cash Games Online',
    description:
      'Play Rock-Paper-Scissors, 2048 & Fantasy Cricket for real cash—fast, fair & fun!',
    images: [
      {
        url: `${config.baseUrl}/images/og-default.png`,
        width: 1200,
        height: 630,
        alt: 'Winbibo – Real Cash Games',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    handle: '@winbibo', // ← your Twitter handle
    site: '@winbibo', // ← usually same as handle
    cardType: 'summary_large_image',
  },
  facebook: {
    appId: 'YOUR_FACEBOOK_APP_ID', // ← if you have one
  },
  additionalMetaTags: [
    { property: 'fb:app_id', content: 'YOUR_FACEBOOK_APP_ID' },
    {
      name: 'google-site-verification',
      content: 'YOUR_GOOGLE_VERIFICATION_CODE',
    },
    {
      name: 'keywords',
      content:
        'Rock Paper Scissors, 2048, Fantasy Cricket, Real Cash Games, Online Games, Winbibo',
    },
    { name: 'theme-color', content: '#311141' },
  ], 
};
