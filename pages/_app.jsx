import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import SSRProvider from 'react-bootstrap/SSRProvider';
import { DefaultSeo } from 'next-seo';
import SEO from 'next-seo.config';
import 'assets/scss/main.scss';
import Spinner from 'react-bootstrap/Spinner';

const MyApp = ({ Component, pageProps }) => {
  const [isOffline, setIsOffline] = useState(false); // State for network status
  const [loading, setLoading] = useState(true); // State to handle splash screen
  const router = useRouter();

  useEffect(() => {
    const handleRouteChange = () => {
      // scroll to top smoothly on every route change
      window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    router.events.on('routeChangeComplete', handleRouteChange);
    return () => {
      router.events.off('routeChangeComplete', handleRouteChange);
    };
  }, [router.events]);

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
      <DefaultSeo {...SEO} />
      <SSRProvider>
        {loading ? (
          <div id="custom-splash">
            <Spinner animation="grow" variant="dark" />
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
