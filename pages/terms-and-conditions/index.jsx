import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import TermsAndConditions from '@/components/screens/TermsAndConditions';
import { Header } from '@/components/screens/Header';
import { Footer } from '@/components/screens/Footer';

const TermsAndConditionsPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Terms & Conditions – Winbibo"
        description="Read the terms and conditions for using Winbibo’s platform and services."
        canonical={`${config.baseUrl}/terms-and-conditions`}
        openGraph={{
          url: `${config.baseUrl}/terms-and-conditions`,
          title: 'Terms & Conditions – Winbibo',
          description:
            'Read the terms and conditions for using Winbibo’s platform and services.',
        }}
      />
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <TermsAndConditions />
      <Footer />
    </MainLayout>
  );
};

export default TermsAndConditionsPage;
