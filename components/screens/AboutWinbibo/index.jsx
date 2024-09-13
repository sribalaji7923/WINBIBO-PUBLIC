import React from 'react';
import classes from './about.module.scss';
import { MobileBanner } from '../Home/mobileHome/components';
import { FollowUs } from '../Home/mobileHome/components/FollowUs';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { DesktopBanner } from '../Home/desktopHome/components';

const AboutWinbibo = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Header isFloat />
      </div>
      <div style={{ padding: '0px 20px' }} className={classes.aboutMain}>
        <div className={classes.aboutMobile}>
          <MobileBanner aboutUs />
        </div>
        <div className={classes.aboutDesktop}>
          <DesktopBanner aboutUs />
        </div>
        <div className="container">
          <div className="row">
            <div class="col-12">
              <div className={classes.aboutContent}>
                <h2>WHO WE ARE</h2>
                <p>
                  Winbibo is one of the fastest-growing online gaming platforms
                  in India, specializing in skill-based casual games. We aim to
                  bring joy and entertainment to players by offering engaging
                  and competitive games that challenge their skills and
                  strategies. Our games, like Balloon Pop, 2048, and fantasy
                  cricket, allow players to immerse themselves in fun, rewarding
                  experiences while competing with real players.
                </p>
              </div>
            </div>
            <div class="col-12">
              <div className={classes.aboutBanner}>
                <img src="/images/about-us.png" alt="about-banner" />
              </div>
            </div>
            <div class="col-12">
              <div className={classes.aboutContent}>
                <h3>About Winbibo</h3>
                <p>
                  Winbibo is dedicated to providing exciting skill-based games
                  that blend fun with the thrill of competition. From casual
                  games to competitive sports challenges, Winbibo offers players
                  an opportunity to showcase their talents and win exciting
                  rewards. Our platform is designed to be accessible and
                  enjoyable for players across India.
                </p>
                <p>
                  With a quick and simple app download process, you can join a
                  community of thousands of players across India, anytime,
                  anywhere. At Winbibo, smart gameplay leads to big wins,
                  allowing you to challenge yourself and improve your skills in
                  a fun and competitive environment.
                </p>
                <p>
                  Play smart, win big, and enjoy the excitement with Winbibo!
                </p>{' '}
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.aboutFollow}>
        <FollowUs />
      </div>
      <div>
        <Footer isFloat />
      </div>
    </>
  );
};

export default AboutWinbibo;
