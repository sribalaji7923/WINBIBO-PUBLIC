import React from 'react';
import classes from '../ResponsibleGaming/responsible.module.scss';

const RefundAndCancellation = () => {
  return (
    <div className={`${classes.responsible} container`}> 
        <div className={classes.privacyMain}>
          <div className={classes.privacyHead}>
            <h2>Refund & Cancellation Policy</h2>
            <p>
              At Winbibo Games (“Winbibo”, “We”, “Us”, “Our”), we believe in
              clear and transparent policies. This Refund & Cancellation Policy
              applies to all transactions made through our web and PWA platforms
              (the “Platform”).
            </p>
            <ol type="1">
              <li>
                <strong>Finality of Transactions:</strong> All participation
                fees paid for skill-based games are final. Once a match is
                initiated or your entry is confirmed, cancellations or refunds
                are not permitted.
              </li>
              <li>
                <strong>User-Side Issues:</strong> Refunds will not be issued
                for disconnections, internet or device failures, or voluntary
                exits by the user after a game starts.
              </li>
              <li>
                <strong>System Failures:</strong> In the event of verified
                server-side or system errors that prevent proper game
                completion, Winbibo may, at its sole discretion, issue a full
                refund of the participation fee.
              </li>
              <li>
                <strong>Refund Requests:</strong> To request a refund due to a
                confirmed system failure, please contact our support team at{' '}
                <a href="mailto:support@winbibo.com">support@winbibo.com</a>{' '}
                within 48 hours of the error. Each request will be reviewed, and
                decisions are at Winbibo’s sole discretion.
              </li>
              <li>
                <strong>Policy Integration:</strong> This policy is part of our
                Terms and Conditions. By participating in any game on the
                Platform, you agree to abide by this Refund & Cancellation
                Policy.
              </li>
            </ol>
          </div>
        </div>
      </div> 
  );
};

export default RefundAndCancellation;
