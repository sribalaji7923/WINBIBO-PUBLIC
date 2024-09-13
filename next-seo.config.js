import config from 'config';

export default {
  openGraph: {
    type: 'website',
    url: config.baseUrl,
    site_name: 'Winbibo',
    images: [
      {
        url: `${config.baseUrl}/images/favicon.svg`,
        width: 1200,
        height: 628,
        alt: 'Seo logo',
        type: 'image/png',
      },
    ],
    title: 'Winbibo - Play money winning games | Online real cash games',
    description:
      'Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation.',
  },
  defaultTitle: 'Winbibo - Play money winning games | Online real cash games',
  description:
    'Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation.',
};
