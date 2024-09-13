import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import { TwoZeroFourEightDetails } from '@/components/screens/gameDetails';

const TwoZeroFourEightPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title={`Winbibo - Play money winning games | Online real cash games`}
        canonical={`${config.baseUrl}/casual-games/2048`}
        description="Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation."
        openGraph={{
          type: 'website',
          title: `Winbibo - Play money winning games | Online real cash games`,
          url: `${config.baseUrl}/casual-games/2048`,
          description:
            'Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation.',
        }}
      />
      <TwoZeroFourEightDetails />
    </MainLayout>
  );
};

export default TwoZeroFourEightPage;
