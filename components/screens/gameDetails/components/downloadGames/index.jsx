import React from 'react';
import classes from './download.module.scss';

const DownloadGames = () => {  
  return (
    <div className="container">
      <div className={classes.downloadMain}>
        <div className="row">
          <div className="col-12">
            <div className={classes.aboutContent}>
              <h6>Install Our PWA Game</h6>
              <h3>Easy Steps for Android & iOS</h3>
              <p>
                Experience Rock Paper Scissors as a Progressive Web App (PWA) —
                no app store required! Add it to your device for instant access
                and full-featured gameplay.
              </p>
            </div>
          </div>
        </div> 
        <div className="row">
          {/* Android Install */}
          <div className="col-12 col-md-6">
            <div className={classes.downloadCard}>
              <div className={classes.downloadHead}>
                <img src="/images/android_logo.png" alt="Android logo" />
                <p>Android PWA:</p>
              </div>
              <div className={classes.downloadBody}>
                <ul>
                  <li>
                    Open the Winbibo site in Chrome on your Android device.
                  </li>
                  <li>
                    When prompted by the install banner (e.g. “Install
                    Winbibo”), tap “Install”.
                  </li>
                  <li>
                    If the banner doesn’t appear, open Chrome’s menu (⋮) and
                    select “Install app”.
                  </li>
                  <li>Confirm by tapping “Install” in the dialog.</li>
                  <li>Launch the game from your home screen or app drawer.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* iOS Install */}
          <div className="col-12 col-md-6">
            <div className={classes.downloadCard}>
              <div className={classes.downloadHead}>
                <img src="/images/ios.png" alt="iOS logo" />
                <p>iOS PWA:</p>
              </div>
              <div className={classes.downloadBody}>
                <ul>
                  <li>Open Safari and navigate to the Winbibo site.</li>
                  <li>Tap the Share icon (⤴︎) at the bottom of the screen.</li>
                  <li>Select “Add to Home Screen”.</li>
                  <li>Tap “Add” in the top-right corner.</li>
                  <li>Open the icon on your home screen to play instantly.</li>
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
