/**
 *   Library imports
 */
import Head from 'next/head';
import Image from 'next/image';
import { useRouter } from 'next/router';

/**
 *   NOT FOUND COMPONENT
 *   @description This is a 404 Page it will be shown if the route asked by the user is not present
 */

export default function NotFound() {
  const Router = useRouter();

  return (
    <body className="bg-white">
      <Head>
        <title>404 | Winbibo</title>
      </Head>
      <div className="d-flex flex-column align-items-center justify-content-center pt-5 mt-5 ">
        <Image
          src="/images/404/404.jpg"
          alt="Picture of 404"
          width="552"
          height="358"
        />

        <div className="action-btn w-100 mt-4 size-md mx-auto">
          <button className="w-100" onClick={() => Router.push('/')}>
            Go Back
          </button>
        </div>
      </div>
    </body>
  );
}
