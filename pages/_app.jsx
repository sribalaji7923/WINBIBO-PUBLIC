import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import SSRProvider from 'react-bootstrap/SSRProvider';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import 'assets/scss/main.scss'; // Your global styles

const MyApp = ({ Component, pageProps }) => {
  const [isOffline, setIsOffline] = useState(false); // State for network status
  const [loading, setLoading] = useState(true); // State to handle splash screen
  const router = useRouter();

  // Check network status
  useEffect(() => {
    const handleOnline = () => setIsOffline(false);
    const handleOffline = () => setIsOffline(true);

    window.addEventListener('online', handleOnline);
    window.addEventListener('offline', handleOffline);

    // Initial network check
    if (!navigator.onLine) {
      setIsOffline(true);
    }

    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener('online', handleOnline);
      window.removeEventListener('offline', handleOffline);
    };
  }, []);

  // Simulate content loading after splash screen
  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setLoading(false); // Hide splash screen and load the app
    }, 1500); // Adjust the delay to your actual load time

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#ffffff" />
      </Head>

      <DefaultSeo {...SEO} />

      <SSRProvider>
        {loading ? (
          <div id="custom-splash">
            <img src="/images/logo-bg.png" alt="Winbibo Logo" />
          </div>
        ) : isOffline ? (
          <div className="network-error">
            <h1>Network not available</h1>
            <p>Please check your internet connection and try again.</p>
          </div>
        ) : (
          <Component {...pageProps} />
        )}
      </SSRProvider>
    </>
  );
};

export default MyApp;
