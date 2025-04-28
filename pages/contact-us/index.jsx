import { MainLayout } from '@/layouts';
import { NextSeo } from 'next-seo';
import config from 'config';
import ContactUs from '@/components/screens/ContactUs';

const ContactUsPage = () => {
  return (
    <MainLayout>
      <NextSeo
        title="Contact Us – Get in Touch with Winbibo"
        description="Questions? Feedback? Reach out and we’ll respond ASAP."
        canonical={`${config.baseUrl}/contact-us`}
        openGraph={{
          url: `${config.baseUrl}/contact-us`,
          title: 'Contact Us – Get in Touch with Winbibo',
          description: 'Questions? Feedback? Reach out and we’ll respond ASAP.',
        }}
      />
      <ContactUs />
    </MainLayout>
  );
};

export default ContactUsPage;
