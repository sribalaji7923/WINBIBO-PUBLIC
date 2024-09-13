import React from 'react';
import classes from './contactUs.module.scss';
import { FollowUs } from '../Home/mobileHome/components/FollowUs';
import { Header } from '../Header';
import { Footer } from '../Footer';

const ContactUs = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <div className="container">
        <div className={classes.contactMain}>
          <div className={classes.contactContent}>
            <h2>Winbibo Customer Support: We're Here for You</h2>
            <p>
              Welcome to Winbibo's Contact Us page—a space where we value your
              feedback, questions, and suggestions. At Winbibo, we are dedicated
              to providing you with top-notch support and ensuring your gaming
              experience is seamless and enjoyable.
            </p>
          </div>
          <div className={classes.contactContent}>
            <h2>Get in Touch with Winbibo's Customer Care</h2>
            <p>
              Although we don’t operate a dedicated helpline at the moment, we
              are fully committed to addressing your queries promptly. Please
              fill in the form below, and our support team will make sure your
              concerns are resolved swiftly and effectively.
            </p>
          </div>
          <div className={classes.contactForm}>
            <h6>
              For any questions, feedback, or issues, feel free to reach out to
              us through the form below:
            </h6>
            <form>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name *"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Mobile Number"
                  pattern="[0-9]{10}"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email"
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject"
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="query"
                  rows="4"
                  placeholder="Type your query here"
                  required
                ></textarea>
              </div>

              <button type="submit">Send Your Query!</button>
            </form>
          </div>
          <div className={classes.contactContent}>
            <h2>Email Winbibo Support</h2>
            <p>
              Have something specific to discuss? Feel free to drop us an email
              at <a href="mailto:support@winbibo.com">support@winbibo.com</a>.
              Our inbox is always open to assist you with any queries or
              feedback you might have. We're here to help and ensure you have
              the best gaming experience on Winbibo.
            </p>
          </div>
        </div>
        <FollowUs />
      </div>
      <Footer />
    </>
  );
};

export default ContactUs;
