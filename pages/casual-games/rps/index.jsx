import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import { BalloonPopDetails } from '@/components/screens/gameDetails';

const BalloonPopPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Rock-Paper-Scissors – Play RPS for Real Cash"
        description="Challenge friends in real-time RPS matches and win cash on Winbibo."
        canonical={`${config.baseUrl}/casual-games/rps`}
        openGraph={{
          url: `${config.baseUrl}/casual-games/rps`,
          title: 'Rock-Paper-Scissors – Play RPS for Real Cash',
          description:
            'Challenge friends in real-time RPS matches and win cash on Winbibo.',
        }}
      />
      <BalloonPopDetails />
    </MainLayout>
  );
};

export default BalloonPopPage;
