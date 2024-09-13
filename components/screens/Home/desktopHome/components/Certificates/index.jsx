import React from 'react';
import classes from './certificates.module.scss';

export const Certificates = () => {
  return (
    <div className="container">
      <div className={classes.certificatesMain}>
        <img
          src="/images/home/desk_certificates/made_in_india.png"
          alt="step1"
        />
        <img
          src="/images/home/desk_certificates/secure_Payment.png"
          alt="step1"
        />
        <img src="/images/home/desk_certificates/no_Bots.png" alt="step1" />
        <img
          src="/images/home/desk_certificates/Instant_Withdrawal.png"
          alt="step1"
        />
        <img
          src="/images/home/desk_certificates/customer_support.png"
          alt="step1"
        />
      </div>
    </div>
  );
};
