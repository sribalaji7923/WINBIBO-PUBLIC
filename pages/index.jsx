import { MainLayout } from '@/layouts';
import HomeComponent from 'components/screens/Home';
import { NextSeo } from 'next-seo';
import config from 'config';

const HomePage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Winbibo – Play Real-Cash Games Online"
        canonical={config.baseUrl}
      />
      <HomeComponent />
    </MainLayout>
  );
};

export default HomePage;
