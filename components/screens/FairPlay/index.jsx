import React from 'react';
import classes from './fairPlay.module.scss';

const FairPlayComponent = () => {
  return (
    <div className={`${classes.fairPlay} container`}>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>How Winbibo Ensures Fairplay</h2>
          <p>
            At Winbibo, we are deeply committed to ensuring fairness,
            transparency, and security for all players. Our Fairplay Policy is
            designed to ensure every game is an equal opportunity for all users.
            We take pride in creating a gaming environment that is competitive,
            rewarding, and enjoyable.
          </p>
          <p>
            We reserve the right to take appropriate actions, including
            investigating and penalizing users involved in unfair practices. We
            encourage all users to familiarize themselves with this Fairplay
            Policy before participating in any games on the platform.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>1. Transparency</h2>
          <ol type="a" className={classes.typeA}>
            <li>
              <p>Equal Opportunity</p>
              <p>
                Winbibo offers equal opportunities to all players by ensuring
                that the rules, regulations, and mechanics of each game apply
                equally to everyone. We actively work to prevent any form of
                cheating, hacking, or manipulation on our platform. Deadlines
                are enforced for game participation to ensure fair access for
                all.
              </p>
              <p>
                All users have access to game rules, odds, and mechanics before
                joining a game, ensuring complete transparency in the gaming
                process.
              </p>
            </li>
            <li>
              <p>Winnings and Payout Transparency</p>
              <p>
                At Winbibo, we believe that users should be fully aware of their
                potential winnings before entering any game. To maintain
                transparency, we clearly outline the following:
              </p>
              <ul className={classes.disc}>
                <li>
                  The point-scoring system is fully explained and available to
                  all users, so they know exactly how their performance impacts
                  the outcome.
                </li>
                <li>
                  Payouts and winnings are processed promptly according to our
                  Terms of Use, with winnings credited directly to the user’s
                  account.
                </li>
                <li>
                  Rules regarding cancellation fees, mid-game exits, or
                  violations of fair play are clearly defined and strictly
                  enforced to maintain the integrity of each game.
                </li>
              </ul>
            </li>
          </ol>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>2. Building Trust</h2>
          <ol type="a" className={classes.typeA}>
            <li>
              <p>Genuine, Verified Users</p>
              <p>
                Winbibo ensures that all users are genuine by using robust
                identity verification methods. We do not allow the use of bots
                or automated accounts. Before processing any withdrawals, we may
                request users to verify their identity using documents such as
                PAN cards or bank account details. These processes ensure that
                only legitimate players are on our platform.
              </p>
            </li>
            <li>
              <p>Secure Transactions</p>
              <p>
                We guarantee the safety of all financial transactions on our
                platform by working with trusted payment gateways and
                implementing 3D secure authentication. Winbibo does not store
                sensitive financial information such as card details, UPI IDs,
                or other payment methods. This information is securely handled
                by authorized service providers in compliance with legal
                regulations.
              </p>
            </li>
            <li>
              <p>Effective Communication</p>
              <p>
                At Winbibo, we are committed to being accessible to our users.
                Our Helpdesk is available to resolve any queries or issues
                quickly, and users can track their concerns through the support
                system for timely resolution.
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>3. Responsibility</h2>
          <ol type="a" className={classes.typeA}>
            <li>
              <p>Protecting Your Information</p>
              <p>
                We prioritize the protection of user data. Your personal
                details, including PAN card and bank account information, are
                used solely for verification purposes and are never shared with
                third parties except when required by law. Winbibo uses advanced
                security protocols to ensure your data remains safe and secure.
              </p>
            </li>
            <li>
              <p>Encouraging Responsible Play</p>
              <p>
                We are committed to promoting responsible gaming. Only users
                aged 18 and above are allowed to participate, and we enforce
                regional laws that prohibit users from restricted areas from
                playing. Users are encouraged to play for entertainment purposes
                only, and we actively discourage any addictive behavior.
              </p>
            </li>
            <li>
              <p>Compliance with Law</p>
              <p>
                All games on Winbibo are skill-based and comply with the
                relevant laws and regulations governing online skill gaming. We
                ensure that our platform is a legal and enjoyable place for
                users to improve their gaming skills.
              </p>
            </li>
          </ol>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>4. Prevention of Fraud & Collusion</h2>
          <ul className={classes.disc}>
            <li>
              Winbibo actively monitors the platform to prevent collusion,
              fraud, or unfair practices. Any player found engaging in
              activities such as creating multiple accounts, colluding with
              others to gain an unfair advantage, or using unauthorized methods
              will face strict penalties, including account suspension and
              forfeiture of winnings.
            </li>
            <li>
              We use automated fraud detection systems to identify suspicious
              behavior and protect the integrity of our games.
            </li>
            <li>
              Players who suspect any fraudulent activity or unfair play are
              encouraged to report such behavior to our support team at{' '}
              <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>5. Fairplay & Fraud Prevention Policy</h2>
          <ul className={classes.disc}>
            <li>
              Winbibo takes all necessary measures to prevent unfair practices,
              including monitoring gameplay for irregularities, and taking
              immediate action against players who violate our Fairplay Policy.
              Violators may face account suspension, withdrawal holds, and even
              permanent account bans.
            </li>
            <li>
              We are committed to preventing any form of financial transfer
              abuse, such as using duplicate accounts or transferring funds
              between accounts for illicit purposes.
            </li>
            <li>
              Any player found violating these terms will be subject to strict
              penalties, including forfeiture of funds and legal action.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default FairPlayComponent;
