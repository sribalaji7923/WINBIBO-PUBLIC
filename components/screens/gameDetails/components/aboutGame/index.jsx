import React from 'react';
import classes from './aboutGame.module.scss';

const AboutGame = ({ aboutGame }) => {
  const { title, subTitle, body } = aboutGame;
  return (
    <div className="container">
      <div className={classes.aboutGameMain}>
        <div className="row">
          <div class="col-12">
            <div className={classes.aboutBanner}>
              <img src="/images/about_balloon.png" alt="about-banner" />
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
