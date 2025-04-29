import React from 'react';
import classes from './terms.module.scss';

const TermsAndConditions = () => {
  return (
    <div className="container">
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>Terms and Conditions</h2>
          <p>
            Welcome to Winbibo Games (“Winbibo”, “We”, “Us”, “Our”). These Terms
            and Conditions (“Terms”) govern your use of our web application and
            Progressive Web App (“Platform”) and all related services
            (“Services”). By accessing or using the Platform, you agree to be
            bound by these Terms and our Privacy Policy. If you do not agree,
            please discontinue use immediately.
          </p>
          <p>
            These Terms form a legally binding agreement under Indian law. All
            disputes arising hereunder are subject to the exclusive jurisdiction
            of the courts of Trichy, Tamil Nadu, India.
          </p>
        </div>
      </div>

      {/* A. Scope of Agreement */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>A. Scope of Agreement</h2>
          <ol type="1">
            <li>
              These Terms, together with the Privacy Policy and any
              game-specific rules, constitute the entire agreement between you
              (“User”) and Winbibo regarding your use of the Platform.
            </li>
            <li>
              Winbibo may amend these Terms at any time by posting the updated
              Terms on the Platform. Continued use after such changes
              constitutes acceptance.
            </li>
            <li>
              If you do not agree to any update, you must cease using the
              Platform.
            </li>
          </ol>
        </div>
      </div>

      {/* B. Description of Services */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>B. Description of Services</h2>
          <ol type="1" start="4">
            <li>
              Winbibo grants a limited, revocable, non-exclusive license to
              access the Platform solely to play skill-based games of Rock Paper
              Scissors and 2048 within India.
            </li>
            <li>
              Winbibo may modify, suspend, or discontinue any aspect of the
              Services at any time without notice.
            </li>
            <li>
              The Platform may display advertisements; Winbibo is not
              responsible for advertiser content.
            </li>
            <li>
              Each game’s specific rules are available within that game and form
              part of these Terms.
            </li>
            <li>
              You are responsible for any internet or data charges incurred
              while using the Platform.
            </li>
          </ol>
        </div>
      </div>

      {/* C. User Registration & Account */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>C. User Registration & Account</h2>
          <ol type="1" start="9">
            <li>
              You must register and create a single account using accurate
              information: mobile number (OTP-verified), state of residence,
              bank details, and PAN for KYC.
            </li>
            <li>
              Duplicate accounts are prohibited; Winbibo may suspend or
              terminate duplicates and forfeit balances.
            </li>
            <li>
              Additional KYC documents may be requested before enabling
              withdrawals.
            </li>
          </ol>
        </div>
      </div>

      {/* D. Eligibility */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>D. Eligibility</h2>
          <ol type="1" start="12">
            <li>
              You must be at least 18 years old and reside in a jurisdiction
              where skill-based gaming is legally permitted.
            </li>
            <li>
              Providing false information may result in account termination and
              forfeiture of funds.
            </li>
          </ol>
        </div>
      </div>

      {/* E. Account Usage & Security */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>E. Account Usage & Security</h2>
          <ol type="1" start="14">
            <li>
              Only you may use your account; do not share credentials with
              others.
            </li>
            <li>
              Winbibo may terminate or restrict accounts for suspected fraud or
              misuse without notice.
            </li>
            <li>
              You consent to verification of payment instruments and reversal of
              erroneous credits.
            </li>
            <li>
              Participation in any game is voluntary and at your own risk.
            </li>
          </ol>
        </div>
      </div>

      {/* F. Social Features (“Winbibo Adda”) */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>F. Social Features (“Winbibo Adda”)</h2>
          <ol type="1" start="18">
            <li>
              You may create a profile, post content, and interact with other
              users. You grant Winbibo a perpetual, royalty-free license to use,
              store, and display your content.
            </li>
            <li>
              Winbibo may remove inappropriate or infringing content at its
              discretion.
            </li>
            <li>Winbibo disclaims liability for user-generated content.</li>
          </ol>
        </div>
      </div>

      {/* G. Skill-Based Games */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>G. Skill-Based Games</h2>
          <ol type="1" start="21">
            <li>
              Only skill-based games are offered on the Platform; no games of
              chance or lottery are provided.
            </li>
            <li>
              Game outcomes depend solely on user skill, strategy, and
              performance.
            </li>
          </ol>
        </div>
      </div>

      {/* H. Restricted Territories */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>H. Restricted Territories</h2>
          <ol type="1" start="23">
            <li>
              Paid play is disabled in Andhra Pradesh, Arunachal Pradesh, Assam,
              Meghalaya, Nagaland, Telangana, Sikkim, and all regions outside
              India. Only free-to-play available there.
            </li>
            <li>
              Users from restricted areas providing false location data may be
              blocked, and any balances forfeited.
            </li>
          </ol>
        </div>
      </div>

      {/* I. Payment Terms */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>I. Payment Terms</h2>
          <strong>Deposits:</strong>
          <ol type="1" start="25">
            <li>
              GST applies on deposits as per Indian law; Winbibo will issue an
              invoice with tax details.
            </li>
            <li>Users may save UPI IDs for faster future transactions.</li>
          </ol>
          <strong>Withdrawals:</strong>
          <ol type="1" start="27">
            <li>
              Withdrawals are processed after KYC verification; applicable taxes
              and fees deducted.
            </li>
            <li>Winnings credited to the user’s verified bank account.</li>
          </ol>
        </div>
      </div>

      {/* J. Prevention of Collusion & Fraud */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>J. Prevention of Collusion & Fraud</h2>
          <ol type="1" start="29">
            <li>
              Collusion or fraudulent activity will result in account
              termination and forfeiture of all funds.
            </li>
            <li>
              Repeated deposits and withdrawals without gameplay are prohibited.
            </li>
            <li>Legal action may be pursued for serious violations.</li>
          </ol>
        </div>
      </div>

      {/* K. Intellectual Property */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>K. Intellectual Property</h2>
          <ol type="1" start="32">
            <li>
              All software, games, trademarks, and content on the Platform are
              owned by Winbibo or its licensors.
            </li>
            <li>
              Users may not modify, reproduce, distribute, or exploit Platform
              content without express written permission.
            </li>
            <li>
              Users indemnify Winbibo for any infringement claims caused by
              user-uploaded content.
            </li>
          </ol>
        </div>
      </div>

      {/* L. Third-Party Sites & Services */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>L. Third-Party Sites & Services</h2>
          <ol type="1" start="35">
            <li>
              The Platform may contain links to third-party websites. Winbibo is
              not responsible for their content or practices.
            </li>
            <li>
              Transactions with third parties are solely between the user and
              the third party.
            </li>
          </ol>
        </div>
      </div>

      {/* M. Disconnection & Technical Issues */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>M. Disconnection & Technical Issues</h2>
          <ol type="1" start="37">
            <li>
              No refunds for user-side connectivity or hardware issues during
              games.
            </li>
            <li>
              If Winbibo server failures occur, games may be canceled and
              participation fees refunded after verification.
            </li>
          </ol>
        </div>
      </div>

      {/* N. Disclaimer of Warranties */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>N. Disclaimer of Warranties</h2>
          <ol type="1" start="39">
            <li>
              Platform and Services are provided “as is” without warranties of
              any kind.
            </li>
            <li>
              Winbibo does not guarantee uninterrupted or error-free operation.
            </li>
            <li>
              Winbibo is not liable for damages due to events beyond its
              control.
            </li>
          </ol>
        </div>
      </div>

      {/* O. Limitation of Liability & Indemnification */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>O. Limitation of Liability & Indemnification</h2>
          <ol type="1" start="42">
            <li>
              Winbibo’s aggregate liability to you shall not exceed the total
              amount paid by you in the preceding 90 days.
            </li>
            <li>
              You agree to indemnify and hold Winbibo harmless against any
              claims, liabilities, or expenses arising from your breach of these
              Terms or misuse of the Platform.
            </li>
          </ol> 
        </div>
      </div>

      {/* P. Termination */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>P. Termination</h2>
          <ol type="1" start="44">
            <li>
              Winbibo may suspend or terminate your access for violations or at
              its discretion without liability.
            </li>
            <li>
              Termination does not affect any rights or obligations that have
              accrued prior to termination.
            </li>
          </ol>
        </div>
      </div>

      {/* Q. Publicity */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>Q. Publicity</h2>
          <ol type="1" start="46">
            <li>
              By accepting a prize, you grant Winbibo the right to use your
              name, likeness, and comments for promotional purposes without
              compensation.
            </li>
          </ol>
        </div>
      </div>

      {/* R. Dispute Resolution */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>R. Dispute Resolution</h2>
          <ol type="1" start="47">
            <li>
              Grievances may be sent to support@winbibo.com. Winbibo will
              appoint a Grievance Officer and a Nodal Officer, whose contact
              details will be published on the Platform.
            </li>
            <li>
              If unresolved within 15 days, disputes will proceed to arbitration
              in Trichy under the Arbitration and Conciliation Act, 1996.
            </li>
            <li>
              The arbitration award shall be final and binding, and each party
              shall bear its own costs unless decided otherwise by the
              arbitrator.
            </li>
          </ol>
        </div>
      </div>

      {/* S. User Balances & Escrow */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>S. User Balances & Escrow</h2>
          <ol type="1" start="50">
            <li>
              User wallet balances may be held in a third-party nodal account as
              required by law.
            </li>
            <li>
              Inactive balances for 12 months may be transferred to a reserve
              account for gaming safety awareness after 45 days’ notice.
            </li>
          </ol>
        </div>
      </div>

      {/* T. Miscellaneous */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>T. Miscellaneous</h2>
          <ol type="1" start="52">
            <li>
              No waiver of any breach shall constitute a waiver of future
              breaches.
            </li>
            <li>
              If any provision is held invalid, the remaining provisions shall
              survive.
            </li>
            <li>You may not assign these Terms without Winbibo’s consent.</li>
          </ol>
        </div>
      </div>

      {/* Contact Information */}
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <p>
            For any questions or grievances, please contact us at{' '}
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
          </p>
        </div>
      </div>
    </div>
  );
};

export default TermsAndConditions;
