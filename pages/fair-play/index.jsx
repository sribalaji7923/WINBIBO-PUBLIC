import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import FairPlayComponent from '@/components/screens/FairPlay';
import { Header } from '@/components/screens/Header';
import { Footer } from '@/components/screens/Footer';

const TermsAndConditionsPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Fair Play – Our Commitment to You"
        description="See how Winbibo ensures transparency, RNG audits, and a level playing field."
        canonical={`${config.baseUrl}/fair-play`}
        openGraph={{
          url: `${config.baseUrl}/fair-play`,
          title: 'Fair Play – Our Commitment to You',
          description:
            'See how Winbibo ensures transparency, RNG audits, and a level playing field.',
        }}
      />
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <FairPlayComponent />
      <Footer />
    </MainLayout>
  );
};

export default TermsAndConditionsPage;
