import React from 'react';
import classes from './responsible.module.scss';

const ResponsibleGamingComponent = () => {
  return (
    <div className={`${classes.responsible} container`}>
      {/* Commitment to Safe Play */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>Our Commitment to Responsible Gaming</h2>
          <p>
            At Winbibo Games, we believe that gaming should be engaging and
            rewarding, while maintaining your well-being. We are dedicated to
            fostering a safe environment, supporting informed decisions, and
            preventing gambling-related harm.
          </p>
          <ul className={classes.disc}>
            <li>
              <strong>Age Verification:</strong> Only users aged 18 and above
              may create accounts. We verify age through OTP and KYC checks.
            </li>
            <li>
              <strong>Deposit & Time Limits:</strong> Set daily or weekly
              deposit and session timers to control your spending and playtime.
            </li>
            <li>
              <strong>Self-Exclusion:</strong> You can take a break or
              deactivate your account for a cooling-off period at any time.
            </li>
            <li>
              <strong>Reality Checks:</strong> Receive periodic reminders about
              time and money spent during your sessions.
            </li>
            <li>
              <strong>Support Access:</strong> Our support team is available
              24/7 at{' '}
              <a href="mailto:support@winbibo.com">support@winbibo.com</a> for
              any concerns.
            </li>
            <li>
              <strong>Regulatory Compliance:</strong> We adhere to all
              applicable Indian laws and regulations for skill-based gaming.
            </li>
          </ul>
        </div>
      </section>

      {/* Healthy Play Guidelines */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>DOs: Healthy Gaming Habits</h2>
          <ul className={classes.disc}>
            <li>
              Play for fun and skill development, not as a source of income.
            </li>
            <li>
              Set a budget and only wager disposable income you can afford to
              lose.
            </li>
            <li>
              Use account settings to apply deposit limits and session timers.
            </li>
            <li>Take regular breaks and avoid long, uninterrupted sessions.</li>
            <li>Pause play if you feel stressed, upset, or distracted.</li>
            <li>Seek help if you notice unhealthy gaming patterns.</li>
          </ul>
        </div>
      </section>

      {/* Avoid Harmful Behaviors */}
      <section className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>DON’Ts: Prevent Unhealthy Gaming</h2>
          <ul className={classes.disc}>
            <li>Don’t chase losses or gamble to recover funds.</li>
            <li>Never borrow money or use essential funds for gaming.</li>
            <li>Avoid gaming while impaired by stress or substances.</li>
            <li>Do not ignore your own limits or account notifications.</li>
            <li>Respect other players; abusive behavior is not tolerated.</li>
            <li>
              Do not share your account credentials or play on multiple
              accounts.
            </li>
          </ul>
          <p>
            For additional support, you can:
            <ul>
              <li>
                Contact us at{' '}
                <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
              </li>
              <li>
                Use self-exclusion and limit tools in your account settings.
              </li>
              <li>
                Consult professional counseling or helpline services if needed.
              </li>
            </ul>
          </p>
        </div>
      </section>
    </div>
  );
};

export default ResponsibleGamingComponent;
