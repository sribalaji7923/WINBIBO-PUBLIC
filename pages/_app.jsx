/* eslint-disable react/no-danger */
/**
 *   Library imports
 */
import Head from 'next/head';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import NProgress from 'nprogress';
import { ToastBar, Toaster } from 'react-hot-toast';
import SSRProvider from 'react-bootstrap/SSRProvider';

// SEO CONFIGS
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';

/**
 *   Custom component/function imports
 */
import ErrorBoundary from '@/helpers/ErrorBoundary';

/**
 *   Required styles import
 */

import 'styles/nprogress.css';
import 'assets/scss/vendor/notification.scss';
import 'assets/scss/main.scss';

NProgress.configure({ showSpinner: false });

const MyApp = ({ Component, pageProps }) => {
  const Router = useRouter();

  /**
   *   PAGE TRANSISTION
   *   @description - While Page transition displaying loading bar
   */

  useEffect(() => {
    const handleStart = () => NProgress.start();
    const handleComplete = () => NProgress.done();
    //  (url !== router.asPath) --> for disabling transition for same path

    Router.events.on('routeChangeStart', handleStart);
    Router.events.on('routeChangeComplete', handleComplete);
    Router.events.on('routeChangeError', handleComplete);

    return () => {
      Router.events.off('routeChangeStart', handleStart);
      Router.events.off('routeChangeComplete', handleComplete);
      Router.events.off('routeChangeError', handleComplete);
    };
  });

  return (
    <>
      <Head>
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/images/favicon.svg" />
        <link rel="apple-touch-icon" href="/images/favicon.svg" />
        <link rel="apple-touch-icon" href="/images/favicon.svg" />
        <meta name="theme-color" content="#fff" />
        <link rel="icon" href="/images/favicon.ico" />
        <link
          rel="preload"
          fetchpriority="high"
          as="image"
          href="/images/svg/Home/home-device.webp"
          type="image/webp"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
      </Head>
      <DefaultSeo {...SEO} />
      <ErrorBoundary>
        <SSRProvider>
          <Component {...pageProps} />
          <Toaster
            position="bottom-right"
            gutter={8}
            reverseOrder
            containerClassName="custom-toast"
            containerStyle={{ right: '40px', bottom: '50px' }}
          >
            {(t) => (
              <ToastBar toast={t} style={{ padding: 0, overflow: 'hidden' }}>
                {({ icon, message }) => {
                  return (
                    <div
                      className={`custom-toast-${t.type} d-flex align-items-center custom-toast-item`}
                    >
                      {icon}
                      {message}
                    </div>
                  );
                }}
              </ToastBar>
            )}
          </Toaster>
        </SSRProvider>
      </ErrorBoundary>
    </>
  );
};

export default MyApp;
