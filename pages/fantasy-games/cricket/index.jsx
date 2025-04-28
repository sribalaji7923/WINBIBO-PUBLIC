import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import { FantasyCricketDetails } from '@/components/screens/gameDetails';

const FantasyCricket = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Fantasy Cricket – Draft & Win Real Cash"
        description="Join daily fantasy cricket contests and compete for cash prizes on Winbibo."
        canonical={`${config.baseUrl}/fantasy-games`}
        openGraph={{
          url: `${config.baseUrl}/fantasy-games`,
          title: 'Fantasy Cricket – Draft & Win Real Cash',
          description:
            'Join daily fantasy cricket contests and compete for cash prizes on Winbibo.',
        }}
      />
      <FantasyCricketDetails />
    </MainLayout>
  );
};

export default FantasyCricket;
