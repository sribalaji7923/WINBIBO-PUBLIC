import React from 'react';
import classes from './reasonToPlay.module.scss';

export const ReasonToPlay = () => {
  return (
    <div className="container">
      <div className={classes.reasonHead}>
        <h6>REASONS To</h6>
        <h3>Play on Winbibo App</h3>
        <p className={classes.description}>
          Discover why users love playing skill-based games and fantasy sports
          on the Winbibo App. Check out what makes our platform a favorite for
          players.
        </p>
        <div className={classes.reasonCardMain}>
          <div className="row">
            <div className="col-12 col-md-8 pb-3">
              <div className={classes.reasonCard}>
                <p className={classes.reasonType}>Win Real Rewards</p>
                <p className={classes.reasonDec}>
                  Play skill-based games and earn exciting prizes.
                </p>
                <img src="/images/reason/reason_1.png" alt="step1" />
              </div>
            </div>
            <div className={`col-6 col-md-4 pb-3 ${classes.columnRight}`}>
              <div className={classes.reasonCard}>
                <p className={classes.reasonType}>Real Players</p>
                <p className={classes.reasonDec}>
                  No bots, only real opponents.
                </p>
                <img src="/images/reason/reason_2.png" alt="step1" />
              </div>
            </div>
            <div className={`col-6 col-md-4 pb-3 ${classes.columnLeft}`}>
              <div className={classes.reasonCard}>
                <p className={classes.reasonType}>24/7 Support</p>
                <p className={classes.reasonDec}>We’re here to help anytime.</p>
                <img src="/images/reason/reason_3.png" alt="step1" />
              </div>
            </div>
            <div className="col-12 col-md-8 pb-3">
              <div className={classes.reasonCard}>
                <p className={classes.reasonType}>Fast Withdrawals</p>
                <p className={classes.reasonDec}>
                  Secure withdrawals, directly to your bank account.
                </p>
                <img src="/images/reason/reason_4.png" alt="step1" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
