import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import ContactUs from '@/components/screens/ContactUs';

const ContactUsPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title={`Winbibo - Play money winning games | Online real cash games`}
        canonical={`${config.baseUrl}/contact-us`}
        description="Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation."
        openGraph={{
          type: 'website',
          title: `Winbibo - Play money winning games | Online real cash games`,
          url: `${config.baseUrl}/contact-us`,
          description:
            'Winbibo offers reliable and efficient technology services. We provide customized solutions for your business needs. Contact us today for a consultation.',
        }}
      />
      <ContactUs />
    </MainLayout>
  );
};

export default ContactUsPage;
