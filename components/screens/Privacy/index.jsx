import React from 'react';
import classes from './privacy.module.scss';

const PrivacyComponent = () => {
  return (
    <div className={`${classes.privacy} container`}>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>Privacy Policy</h2>
          <p>
            This Privacy Policy ("Policy") outlines how Winbibo Games
            ("Winbibo", "We", "Us", or "Our") collects, uses, and protects your
            personal information through our web application and Progressive Web
            App ("Platform"). By accessing or using our Platform, you agree to
            this Policy. If you disagree, please refrain from using our
            services.
          </p>
          <p>
            For the purposes of this Policy, "Sensitive Personal Data or
            Information" includes passwords, financial data, health records, and
            biometric information, as defined under the Information Technology
            (Reasonable Security Practices and Procedures and Sensitive Personal
            Data or Information) Rules, 2011.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>i. Our Business & Policy Scope</h2>
          <p>
            Winbibo Games operates skill-based games such as Rock Paper Scissors
            and 2048, accessible via web and PWA platforms. Our services are
            intended for users aged 18 years and above, located in jurisdictions
            where such skill games are legally permitted. We do not knowingly
            collect data from minors. If you are aware of any such collection,
            please notify us at{' '}
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
          </p>
          <p>
            This Policy does not apply to third-party websites or services
            linked through our Platform.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>ii. Information Collection</h2>
          <p>
            <span>A. Personal Information:</span> We collect personal data
            during registration and interactions with our Platform, including:
          </p>
          <ol>
            <li>
              Full name, phone number, and region (email ID not mandatory).
            </li>
            <li>
              Bank account details, payment identifiers (e.g., UPI IDs), and KYC
              documents if required by law.
            </li>
            <li>
              Support communication records including gameplay activities and
              payment issues.
            </li>
          </ol>
          <p>
            <span>B. Non-Personal Information:</span> We may collect device
            data, log information, location data, and usage analytics to improve
            Platform functionality and user experience.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>iii. Use of Information</h2>
          <p>
            Your information enables us to operate, improve, and personalize our
            services, facilitate secure transactions, prevent fraud, and comply
            with legal obligations.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>iv. Disclosure of Information</h2>
          <p>We may share your information under these circumstances:</p>
          <ol>
            <li>
              <span>Service Providers:</span> Payment processors, hosting
              partners, SMS gateways, and analytics providers.
            </li>
            <li>
              <span>Legal Compliance:</span> To comply with legal requirements
              or enforce our Terms of Use.
            </li>
            <li>
              <span>Corporate Restructuring:</span> During mergers,
              acquisitions, or asset sales.
            </li>
          </ol>
          <table className={classes.serviceTable}>
            <thead>
              <tr>
                <th>Entity</th>
                <th>Service</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Cashfree Payments</td>
                <td>Payment gateway for deposits and withdrawals</td>
              </tr>
              <tr>
                <td>Digital Ocean Hosting</td>
                <td>Secure cloud hosting and data storage</td>
              </tr>
              <tr>
                <td>SMS Providers</td>
                <td>OTP transmission for account security</td>
              </tr>
              <tr>
                <td>Geolocation Services</td>
                <td>Regional verification for platform access</td>
              </tr>
              <tr>
                <td>Analytics Tools</td>
                <td>Platform performance and activity analysis</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>v. Your Rights</h2>
          <p>
            You may access, update, or request deletion of your data by
            contacting{' '}
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>. We
            will respond in accordance with applicable laws.
          </p>
          <p>
            Data is retained only for the duration necessary to provide services
            or comply with legal obligations.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>vi. Data Security</h2>
          <p>
            We implement commercially reasonable security measures to protect
            your information. Despite our efforts, no security system is
            impenetrable, and we cannot guarantee absolute security.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>vii. Cookies and Tracking Technologies</h2>
          <p>
            Our Platform may use cookies and similar technologies to enhance
            user experience, analyze usage patterns, and deliver personalized
            content. You may manage your cookie preferences through browser
            settings.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>viii. Changes to this Privacy Policy</h2>
          <p>
            We reserve the right to update or modify this Privacy Policy at any
            time. Changes will be effective immediately upon posting on our
            Platform. Your continued use constitutes acceptance of the updated
            Policy.
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>ix. Grievance Redressal</h2>
          <p>
            For any questions, complaints, or disputes regarding your data or
            this Policy, please contact{' '}
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
            Disputes will be governed by Indian laws and subject to the
            exclusive jurisdiction of the courts in Trichy, Tamil Nadu, India.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyComponent;
