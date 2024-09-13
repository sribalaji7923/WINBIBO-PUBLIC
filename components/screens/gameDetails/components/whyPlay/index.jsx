import React from 'react';
import classes from './whyPlay.module.scss';

const WhyPlay = ({ whyPlayGames }) => {
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
                <img src="/images/why_play_carrom.png" alt="why_play_carrom" />
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
