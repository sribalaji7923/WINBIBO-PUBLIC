import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import { TwoZeroFourEightDetails } from '@/components/screens/gameDetails';

const TwoZeroFourEightPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="2048 – Play 2048 for Real Cash"
        description="Slide tiles, hit 2048 and win real cash prizes on Winbibo."
        canonical={`${config.baseUrl}/casual-games/2048`}
        openGraph={{
          url: `${config.baseUrl}/casual-games/2048`,
          title: '2048 – Play 2048 for Real Cash',
          description:
            'Slide tiles, hit 2048 and win real cash prizes on Winbibo.',
        }}
      />
      <TwoZeroFourEightDetails />
    </MainLayout>
  );
};

export default TwoZeroFourEightPage;
