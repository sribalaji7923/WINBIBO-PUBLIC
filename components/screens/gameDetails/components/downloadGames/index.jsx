import React from 'react';
import classes from './download.module.scss';

const DownloadGames = () => {
  return (
    <div className="container">
      <div className={classes.downloadMain}>
        <div className="row">
          <div class="col-12 ">
            <div className={classes.aboutContent}>
              <h6>How to Download Rock Paper Scissors</h6>
              <h3>Quick Steps for Android & iOS</h3>
              <p>
                Rock Paper Scissors, the most thrilling Rock Paper Scissors
                game, is available on both Android and iOS devices. Here’s how
                to get started:
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div className={classes.downloadCard}>
              <div className={classes.downloadHead}>
                <img src="/images/android_logo.png" alt="andriod-logo" />
                <p>For Android:</p>
              </div>
              <div className={classes.downloadBody}>
                <ul>
                  <li>Visit the Winbibo website.</li>
                  <li>Tap on the link to download and open the .apk file.</li>
                  <li>Click on the “Download App” button.</li>
                  <li>Follow the on-screen instructions to install the app.</li>
                  <li>
                    Once installed, open the app, sign up, and start playing
                    Rock Paper Scissors.
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div className={classes.downloadCard}>
              <div className={classes.downloadHead}>
                <img src="/images/android_logo.png" alt="andriod-logo" />
                <p>For iOS:</p>
              </div>
              <div className={classes.downloadBody}>
                <ul>
                  <li>Visit the Winbibo website.</li>
                  <li>Click on the “Download App” button.</li>
                  <li>
                    Tap the share icon (located either at the bottom or top of
                    your screen, depending on the device).
                  </li>
                  <li>Select "Add to Home Screen".</li>
                  <li>
                    Open the app, sign up, and start your Rock Paper Scissors
                    adventure!
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DownloadGames;
