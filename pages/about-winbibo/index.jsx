import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import AboutWinbibo from '@/components/screens/AboutWinbibo';

const AboutWinbiboPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="About Winbibo – Our Mission & Team"
        description="Learn about Winbibo’s story, meet our team, and see how we power real-cash gaming."
        canonical={`${config.baseUrl}/about-winbibo`}
        openGraph={{
          url: `${config.baseUrl}/about-winbibo`,
          title: 'About Winbibo – Our Mission & Team',
          description:
            'Learn about Winbibo’s story, meet our team, and see how we power real-cash gaming.',
        }}
      />
      <AboutWinbibo />
    </MainLayout>
  );
};

export default AboutWinbiboPage;
