import React from 'react';
import classes from './privacy.module.scss';

const PrivacyComponent = () => {
  return (
    <div className={`${classes.privacy} container`}>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>Privacy Policy</h2>
          <p>
            This privacy policy (“Privacy Policy”) governs the collection, use,
            and transfer of personal information by Winbibo Games (hereinafter
            referred to as “Winbibo”, “We”, “Us”, or “Our”) through our mobile
            applications or websites (Platform). By using the Platform, you
            consent to the collection, storage, disclosure, and other uses of
            your personal information in accordance with this Privacy Policy. If
            you do not agree, please refrain from using our Services. This
            policy applies only to services provided by Winbibo Games via the
            Platform.
          </p>
          <p>
            For the purposes of this Privacy Policy,{' '}
            <span>“Sensitive Personal Data or Information”</span>
            means any personal information that consists of: (i) passwords, (ii)
            financial information (e.g., bank account details, payment methods),
            (iii) health conditions, (iv) medical history, and (v) biometric
            data. We adhere to the Information Technology (Reasonable Security
            Practices and Procedures and Sensitive Personal Data or Information)
            Rules, 2011, in collecting and processing such sensitive data.
          </p>
        </div>
      </div>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>i. Our Business & Policy Applicability</h2>
          <p>
            Winbibo Games operates platforms that offer skill-based games, such
            as Rock Paper Scissors, 2048, and fantasy cricket. By accessing
            our Platform, users (hereinafter referred to as{' '}
            <span>“Users/You”</span>) can engage in various online skill games.
            To use our Services, you must be at least 18 years old and reside in
            a region where such games are legally permissible. We do not
            knowingly collect any Personal Information from minors. If such
            information is inadvertently provided, we will promptly delete it.
            If you are aware of a minor providing personal information, please
            contact our support team at{' '}
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
          </p>
          <p>
            This Privacy Policy does not apply to third-party websites or
            services that you may interact with while using the Platform. We are
            not responsible for the practices or content of third-party
            services.
          </p>
        </div>
      </div>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>ii. Collection & Use of Information</h2>
          <p>
            <span>A. Personal Information</span> We collect personal information
            during registration or through third-party service providers. This
            may include:
          </p>
          <ol type="1">
            <li>
              Phone number, name, location (we do not collect user email IDs).
            </li>
            <li>
              Bank account details, payment methods (including UPI or Virtual
              Payment Addresses), and KYC documents.
            </li>
            <li>
              Customer support interactions: Any information shared during
              customer service interactions, such as gameplay activity, user ID,
              or payment issues.
            </li>
          </ol>
          <p>
            <span>B. Non-Personal Data:</span> We may collect data like device
            information, call logs, and metadata to analyze player activity and
            improve the user experience. This may include:
          </p>
          <ol type="1">
            <li>
              Advertising Identifiers: We and third-party advertisers may use
              identifiers to optimize the delivery of ads relevant to your
              interests.
            </li>
            <li>
              Location Services: We use location information to verify you are
              accessing the Platform from permissible regions.
            </li>
            <li>
              Log Data: This includes IP addresses, browser type, device IDs,
              and usage data to improve and personalize the Services.
            </li>
            <li>
              Third-Party Services: We use third-party services for hosting and
              analytics. These providers may collect and process data like
              cookies, location, and device identifiers.
            </li>
          </ol>
        </div>
      </div>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>iii. Use of Information</h2>
          <p>
            Personal information may be used to contact you, improve our
            Services, facilitate transactions, and personalize your experience.
            We may use your financial information (e.g., UPI handles) to
            streamline future transactions.
          </p>
        </div>
      </div>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>iv. Information Sharing & Disclosure</h2>
          <p>
            We may share your Personal Information with third parties under the
            following circumstances:
          </p>
          <ol type="1">
            <li>
              <span>Service Provision:</span> We may share information with
              payment processors to facilitate transactions (such as payments
              and withdrawals).
            </li>
            <li>
              <span>Law Enforcement:</span> Disclosure as required by law or for
              legal proceedings.
            </li>
            <li>
              <span>Affiliates:</span> Sharing information with business
              partners or affiliates for marketing or service enhancement
              purposes.
            </li>
            <li>
              <span>Change in Control:</span> If Winbibo undergoes a merger or
              sale, your information may be transferred to the new entity.
            </li>
          </ol>
          <div>
            {/* <h3>Third-Party Data Recipients</h3> */}
            <table className={classes.serviceTable}>
              <thead>
                <tr>
                  <th>Third-Party Entity Name</th>
                  <th>Service/Function</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Cashfree Payment Gateway</td>
                  <td>Facilitate deposits and withdrawals on our platform</td>
                </tr>
                <tr>
                  <td>AWS Hosting Services (India)</td>
                  <td>
                    Cloud hosting and data storage for platform functionality
                  </td>
                </tr>
                <tr>
                  <td>SMS OTP Providers</td>
                  <td>For sending OTP for user authentication and security</td>
                </tr>
                <tr>
                  <td>IP Geolocation Services</td>
                  <td>Ensure platform access from allowed regions</td>
                </tr>
                <tr>
                  <td>Data Analytics Providers</td>
                  <td>
                    Analyze player activity and optimize platform performance
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>v. Your Rights</h2>
          <p>
            You have the right to access, modify, or request deletion of your
            personal data. Requests can be made by contacting us at
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>. We
            will respond within the legally required timeframe.
          </p>
          <p>
            Personal data will be retained only as long as necessary to provide
            the Services or to comply with legal obligations.
          </p>
        </div>
      </div>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>vi. Data Security</h2>
          <p>
            We take appropriate technical and organizational measures to protect
            your data. Our servers are hosted on AWS services in India. While we
            strive to ensure data security, we cannot guarantee the absolute
            security of data during transmission over the internet.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>vii. Termination & Data Retention</h2>
          <p>
            Your information will be retained for as long as needed to provide
            the Services or as required by law. After this period, we will
            delete or anonymize your data.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>viii. Grievance Redressal</h2>
          <p>
            For any privacy-related concerns or to exercise your rights, please
            contact us at{' '}
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>. We
            will address your requests in a timely manner. Any disputes arising
            from this Privacy Policy will be subject to the exclusive
            jurisdiction of the courts located in Trichy, Tamil Nadu, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyComponent;
