import React from 'react';
import classes from './whyPlay.module.scss';

const WhyPlay = ({ whyPlayGames, isKey  }) => {
  const { title, subTitle, body, steps } = whyPlayGames;
  return (
    <div className="container">
      <div className={classes.whyPlayMain}>
        <div className="row">
          <div class="col-12">
            <div className={classes.aboutContent}>
              <h6>{title}</h6>
              <h3>{subTitle}</h3>
              <p>{body}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={classes.downloadCard}>
              <div className={classes.downloadHead}>
                {isKey === 1 ? (
                  <img src="/images/skill/rps_game_v2.png" alt="about-banner" />
                ) : (
                  <img src="/images/2048.svg" alt="about-banner" />
                )}
              </div>
              <div className={classes.downloadBody}>
                <ul>
                  {steps.map((item, key) => (
                    <li key={key}>
                      <span>{item.stepHead}</span>
                      {item.step}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyPlay;
