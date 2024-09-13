import { MainLayout } from '@/layouts';
import HomeComponent from 'components/screens/Home';
import { NextSeo } from 'next-seo';
import config from 'config';

const HomePage = () => {
  return (
    <MainLayout>
      <NextSeo
        title={`Winbibo - Play money winning games | Online real cash games`}
        canonical={`${config.baseUrl}`}
        description="Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation."
        openGraph={{
          type: 'website',
          title: `Winbibo - Play money winning games | Online real cash games`,
          url: `${config.baseUrl}`,
          description:
            'Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation.',
        }}
      />
      <HomeComponent />
    </MainLayout>
  );
};

export default HomePage;
