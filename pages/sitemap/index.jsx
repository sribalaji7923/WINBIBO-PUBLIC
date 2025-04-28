import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import { Header } from '@/components/screens/Header';
import { Footer } from '@/components/screens/Footer';
import SiteMap from '@/components/screens/SiteMap';

const SiteMapPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Sitemap – Winbibo"
        description="Quick links to every page on Winbibo."
        canonical={`${config.baseUrl}/sitemap`}
        openGraph={{
          url: `${config.baseUrl}/sitemap`,
          title: 'Sitemap – Winbibo',
          description: 'Quick links to every page on Winbibo.',
        }}
      />
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <SiteMap />
      <Footer />
    </MainLayout>
  );
};

export default SiteMapPage;
