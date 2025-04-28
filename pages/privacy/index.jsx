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
        title="Privacy Policy – Winbibo"
        description="Understand how we collect, use, and safeguard your personal information."
        canonical={`${config.baseUrl}/privacy`}
        openGraph={{
          url: `${config.baseUrl}/privacy`,
          title: 'Privacy Policy – Winbibo',
          description:
            'Understand how we collect, use, and safeguard your personal information.',
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
