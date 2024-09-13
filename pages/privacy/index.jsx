import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import PrivacyComponent from '@/components/screens/Privacy';
import { Header } from '@/components/screens/Header';
import { Footer } from '@/components/screens/Footer';

const PrivacyPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title={`Winbibo - Play money winning games | Online real cash games`}
        canonical={`${config.baseUrl}/privacy`}
        description="Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation."
        openGraph={{
          type: 'website',
          title: `Winbibo - Play money winning games | Online real cash games`,
          url: `${config.baseUrl}/privacy`,
          description:
            'Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation.',
        }}
      />
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <PrivacyComponent />
      <div>
        <Footer />
      </div>
    </MainLayout>
  );
};

export default PrivacyPage;
