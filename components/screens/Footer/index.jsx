import React, { useState, useEffect } from 'react';
import classes from './footer.module.scss';
import Link from 'next/link';
import { FollowUs } from '../Home/mobileHome/components/FollowUs';

export const Footer = ({ isFloat = false }) => {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <div
      className={classes.footerMain}
      style={{ paddingBottom: isFloat ? '125px' : '0px' }}
    >
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={classes.footerLogo}>
              <img src="/images/logo_black.svg" alt="logo" />
              <p className={classes.description}>
                Winbibo is an online gaming platform where the competitive
                spirit comes alive. Play casual games and skill-based challenges
                to win exciting rewards.
              </p>
            </div>
          </div>
          <div className="col-0 col-md-6 d-none d-md-block">
            <FollowUs onlyContent />
          </div>
        </div>
        <div className="row">
          <div className="col-6 col-md-3">
            <div className={classes.list}>
              <ul>
                <li className={classes.title}>Casual Games</li>
                <li>Rock Paper Scissors</li>
                <li>2048</li>
              </ul>
            </div>
          </div>
          {/* <div className="col-6 col-md-3">
            <div className={classes.list} style={{ paddingBottom: '20px' }}>
              <ul>
                <li className={classes.title}>Fantasy Games</li>
                <li>Fantasy Cricket</li>
              </ul>
            </div>
          </div> */}
        </div>
        <div className={classes.footerBanner}>
          <img src="/images/footer_banner.png" alt="banner" />
          <p>
            Winbibo is open to individuals over 18 years of age in states of
            India where games of skill are legally permitted. Games on the
            platform may involve financial risk and can be habit-forming. Please
            play responsibly, with awareness of the risks involved. T&Cs apply.
          </p>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={classes.link}>
              <ul>
                <li>
                  <Link href="/privacy">
                    <a>Privacy Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/terms-and-conditions">
                    <a>Terms & Conditions</a>
                  </Link>
                </li>
                <li>
                  <Link href="/refund-and-cancellation">
                    <a> Refund & Cancellation Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/responsible-gaming">
                    <a>Responsible Gaming Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/fair-play">
                    <a>FairPlay Policy</a>
                  </Link>
                </li>
                <li>
                  <Link href="/sitemap">
                    <a>Sitemap</a>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={classes.companyName}>
          <p>Ⓒ {currentYear} WINBIBO GAMES. All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
};
