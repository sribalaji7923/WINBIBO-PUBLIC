import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import RefundAndCancellation from '@/components/screens/RefundAndCancellation';
import { Header } from '@/components/screens/Header';
import { Footer } from '@/components/screens/Footer';

const RefundAndCancellationPage = () => {
  const pageUrl = `${config.baseUrl}/refund-and-cancellation`;

  return (
    <MainLayout>
      <NextSeo
        title="Refund & Cancellation Policy | Winbibo Games"
        description="Learn about Winbibo Games' refund and cancellation policy for skill-based game participation fees. Understand finality of transactions, conditions for system failure refunds, and how to request support."
        canonical={pageUrl}
        openGraph={{
          url: pageUrl,
          title: 'Refund & Cancellation Policy | Winbibo Games',
          description:
            "Learn about Winbibo Games' refund and cancellation policy for skill-based game participation fees. Understand finality of transactions, conditions for system failure refunds, and how to request support.",
        }}
      />
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <RefundAndCancellation />
      <Footer />
    </MainLayout>
  );
};

export default RefundAndCancellationPage;
