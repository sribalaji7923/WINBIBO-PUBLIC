import React from 'react';
import classes from './desktopBanner.module.scss';

export const DesktopBanner = ({ aboutUs = false }) => {
  return (
    <div className="mobile-banner container">
      <div className={classes.topBanner}>
        <div className="row">
          <div className="col-6">
            <div className={classes.mainHeading}>
              {aboutUs ? (
                <>
                  <p>About Us</p>
                  <p>Daily Winnings in Real Cash Games</p>
                  <p>Play Games & Win Big in 45 Seconds!</p>
                </>
              ) : (
                <>
                  <p>₹1 Crore+</p>
                  <p>Daily Winnings in Real Cash Games</p>
                  <p>Play Games & Win Big in 45 Seconds!</p>
                </>
              )}

              <div className={`${classes.btn} downBtn`}>
                <button>
                  <span>
                    <img src="/images/home/download_icon.png" alt="download" />
                  </span>
                  Download & Get 10 Free Cash
                </button>
              </div>
            </div>
          </div>
          <div className="col-6">
            <div className={classes.bannerImage}>
              <img src="/images/home/desktop_banner.png" alt="banner1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
