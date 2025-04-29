import React from 'react';
import classes from './fairPlay.module.scss';

const FairPlayComponent = () => {
  return (
    <div className={`${classes.fairPlay} container`}>
      {/* Introduction */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>Ensuring Fairplay at Winbibo</h2>
          <p>
            Winbibo Games is dedicated to maintaining a transparent, secure, and
            equitable gaming environment. Our Fairplay Policy outlines the
            measures we implement to guarantee integrity and equal opportunity
            for all participants.
          </p>
        </div>
      </section>

      {/* 1. Transparency */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>1. Transparency</h2>
          <ol type="a" className={classes.typeA}>
            <li>
              <p>
                <strong>Equal Access:</strong> All players receive the same
                rules, mechanics, and participation deadlines. Cheating,
                hacking, or manipulation is strictly prohibited.
              </p>
            </li>
            <li>
              <p>
                <strong>Rules & Mechanics:</strong> Game rules, scoring systems,
                and payout structures are clearly displayed before
                participation.
              </p>
            </li>
            <li>
              <p>
                <strong>Payout Clarity:</strong> Potential winnings and
                processing timelines are communicated upfront; payouts follow
                our Terms without delay.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 2. Building Trust */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>2. Building Trust</h2>
          <ol type="a" className={classes.typeA}>
            <li>
              <p>
                <strong>User Verification:</strong> We employ OTP and KYC checks
                to ensure genuine accounts. Automated bots and multiple accounts
                are disallowed.
              </p>
            </li>
            <li>
              <p>
                <strong>Secure Transactions:</strong> All payments are processed
                via trusted gateways with 3D secure authentication. Winbibo does
                not store sensitive payment data.
              </p>
            </li>
            <li>
              <p>
                <strong>Responsive Support:</strong> Our Helpdesk addresses
                queries and disputes promptly. Contact us at{' '}
                <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 3. Player Responsibility */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>3. Player Responsibility</h2>
          <ol type="a" className={classes.typeA}>
            <li>
              <p>
                <strong>Data Protection:</strong> Personal details are used
                solely for verification and compliance. Data is securely stored
                and never shared, except as required by law.
              </p>
            </li>
            <li>
              <p>
                <strong>Lawful Play:</strong> All games on Winbibo are
                skill-based and comply with applicable regulations. Users must
                abide by local gaming laws.
              </p>
            </li>
            <li>
              <p>
                <strong>Fair Participation:</strong> Users should engage
                responsibly; any abusive or disruptive behavior is subject to
                action.
              </p>
            </li>
          </ol>
        </div>
      </section>

      {/* 4. Fraud & Collusion Prevention */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>4. Fraud &amp; Collusion Prevention</h2>
          <ul className={classes.disc}>
            <li>
              Automated systems monitor for suspicious patterns, collusion, and
              multiple-account misuse.
            </li>
            <li>
              Violations (e.g., colluding or using bots) lead to account
              suspension, forfeiture of funds, and possible legal action.
            </li>
            <li>
              Suspected unfair play can be reported to{' '}
              <a href="mailto:support@winbibo.com">support@winbibo.com</a> for
              investigation.
            </li>
          </ul>
        </div>
      </section>

      {/* 5. Enforcement */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>5. Enforcement of Fairplay</h2>
          <ul className={classes.disc}>
            <li>
              Winbibo reserves the right to audit game logs and user activity to
              detect unfair practices.
            </li>
            <li>
              Confirmed violations result in penalties including tournament
              disqualification, balance forfeiture, and permanent bans.
            </li>
            <li>
              Winbibo maintains final decision authority. All actions are
              conducted under the fairness and integrity standards set forth in
              our Terms.
            </li>
          </ul>
        </div>
      </section>
    </div>
  );
};

export default FairPlayComponent;
