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
          Download the app and enjoy competitive games like Rock Paper Scissors,
          2048, and fantasy cricket. Compete, strategize, and win exciting
          rewards.{' '}
        </p>
        <div className={classes.skillImages}>
          <div className="row">
            <div className="col-6">
              <div>
                {' '}
                <img src="/images/skill/rps_game.svg" alt="banner3" />
              </div>
            </div>
            <div className="col-6">
              <img src="/images/2048.svg" alt="banner2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
