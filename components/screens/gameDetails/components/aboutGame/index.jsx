import React from 'react';
import classes from './aboutGame.module.scss';

const AboutGame = ({ aboutGame, isKey }) => {
  const { title, subTitle, body } = aboutGame;
  return (
    <div className="container">
      <div className={classes.aboutGameMain}>
        <div className="row">
          <div class="col-12">
            <div className={classes.aboutBanner}>
              {isKey === 1 ? (
                <img src="/images/skill/rps_game_v2.png" alt="about-banner" />
              ) : (
                <img src="/images/2048.svg" alt="about-banner" />
              )}
            </div>
          </div>
          <div class="col-12">
            <div className={classes.aboutContent}>
              <h6>{title}</h6>
              <h3>{subTitle}</h3>
              <p>{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutGame;
