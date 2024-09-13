import React from 'react';
import classes from './playGame.module.scss';

const PlayGame = ({ playGames }) => {
  const { title, subTitle, body, steps } = playGames;
  return (
    <div className="container">
      <div className={classes.downloadMain}>
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
              <div className={classes.downloadBody}>
                <ol type="1">
                  {steps.map((item, key) => (
                    <li key={key}>{item.step}</li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayGame;
