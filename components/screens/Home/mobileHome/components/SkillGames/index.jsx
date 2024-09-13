import React from 'react';
import classes from './skillGames.module.scss';

export const SkillGames = () => {
  return (
    <div className="container">
      <div className={classes.skillMain}>
        <h2 className={classes.title}>
          {' '}
          Skill Based Games &amp; <br /> Fantasy Sports
        </h2>
        <p>
          Download the app and enjoy competitive games like Balloon Pop, 2048,
          and fantasy cricket. Compete, strategize, and win exciting rewards.{' '}
        </p>
        <div className={classes.skillImages}>
          <div className="row">
            <div className="col-6 col-md-4">
              <div>
                <img src="/images/skill/banner1.png" alt="banner1" />
              </div>
            </div>
            <div className="col-6 col-md-4">
              <img src="/images/skill/banner2.png" alt="banner2" />
            </div>
            <div className="col-12 col-md-4">
              <div className={classes.skillCricket}>
                <img src="/images/skill/banner3.png" alt="banner3" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
