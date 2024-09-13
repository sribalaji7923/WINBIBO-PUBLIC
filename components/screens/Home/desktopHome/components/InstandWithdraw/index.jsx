import React from 'react';
import classes from './withdrawal.module.scss';

export const InstandWithdraw = () => {
  return (
    <div className={classes.instandWidthdraw}>
      <div className={classes.content}>
        <h6>Instantly</h6>
        <h3>Withdraw Winnings</h3>
      </div>
      <div className={classes.certificatesMain}>
        <img src="/images/home/g_pay.png" alt="step1" />
        <img src="/images/home/phone_pe.png" alt="step1" />
        <img src="/images/home/paytm.png" alt="step1" />
        <img src="/images/home/bhim.png" alt="step1" />
        <img src="/images/home/amazon_pay.png" alt="step1" />
      </div>
    </div>
  );
};
