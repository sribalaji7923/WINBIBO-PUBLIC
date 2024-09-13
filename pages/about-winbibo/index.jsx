import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import AboutWinbibo from '@/components/screens/AboutWinbibo';

const AboutWinbiboPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title={`Winbibo - Play money winning games | Online real cash games`}
        canonical={`${config.baseUrl}/about-winbibo`}
        description="Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation."
        openGraph={{
          type: 'website',
          title: `Winbibo - Play money winning games | Online real cash games`,
          url: `${config.baseUrl}/about-winbibo`,
          description:
            'Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation.',
        }}
      />
      <AboutWinbibo />
    </MainLayout>
  );
};

export default AboutWinbiboPage;
