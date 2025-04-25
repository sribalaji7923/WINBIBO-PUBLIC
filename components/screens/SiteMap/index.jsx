import React from 'react';
import classes from './siteMap.module.scss';
import Link from 'next/link';

const SiteMap = () => {
  return (
    <div className={`${classes.siteMap} container`}>
      <h2>SiteMap</h2>
      <div className={classes.content}>
        <h6>Main Pages</h6>
        <ul>
          <li>
            <Link href="/">Winbibo</Link>
          </li>
          <li>
            <Link href="/about-winbibo">About Us</Link>
          </li>
          <li>
            <Link href="/faq">FAQ's</Link>
          </li>
          <li>
            <Link href="/contact-us">Contact Us</Link>
          </li>
          <li>
            <Link href="/privacy">Privacy Policy</Link>
          </li>
          <li>
            <Link href="/terms-and-conditions">Terms & Conditions</Link>
          </li>
          <li>
            <Link href="/responsible-gaming">Responsible Gaming Policy</Link>
          </li>
          <li>
            <Link href="/fair-play">FairPlay Policy</Link>
          </li>
        </ul>
      </div>
      <div className={classes.content}>
        <h6>Casual Games</h6>
        <ul>
          <li>
            <Link href="/casual-games/rps">Rock Paper Scissors</Link>
          </li>
          <li>
            <Link href="/casual-games/2048">2048</Link>
          </li>
        </ul>
      </div>
      <div className={classes.content}>
        <h6>Fantasy Games</h6>
        <ul>
          <li>
            <Link href="/fantasy-games/cricket">Fantasy Cricket</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SiteMap;
