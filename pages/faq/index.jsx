import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import Faq from '@/components/screens/Faq';

const FaqPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="FAQ – Frequently Asked Questions"
        description="All your questions about games, payouts, accounts, and more answered here."
        canonical={`${config.baseUrl}/faq`}
        openGraph={{
          url: `${config.baseUrl}/faq`,
          title: 'FAQ – Frequently Asked Questions',
          description:
            'All your questions about games, payouts, accounts, and more answered here.',
        }}
      />
      <Faq />
    </MainLayout>
  );
};

export default FaqPage;
