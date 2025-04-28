import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import ResponsibleGamingComponent from '@/components/screens/ResponsibleGaming';
import { Header } from '@/components/screens/Header';
import { Footer } from '@/components/screens/Footer';

const TermsAndConditionsPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Responsible Gaming – Play Safely"
        description="Learn about Winbibo’s tools and support for safe, responsible play."
        canonical={`${config.baseUrl}/responsible-gaming`}
        openGraph={{
          url: `${config.baseUrl}/responsible-gaming`,
          title: 'Responsible Gaming – Play Safely',
          description:
            'Learn about Winbibo’s tools and support for safe, responsible play.',
        }}
      />
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <ResponsibleGamingComponent />
      <Footer />
    </MainLayout>
  );
};

export default TermsAndConditionsPage;
