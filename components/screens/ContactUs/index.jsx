import React, { useState } from 'react';
import classes from './contactUs.module.scss';
import { FollowUs } from '../Home/mobileHome/components/FollowUs';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { addContact } from '@/service';

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    query: '',
  });
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState({ text: '', type: '' });

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({ ...prev, [id]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    setMessage({ text: '', type: '' });
    // Basic validation
    if (
      !formData.name ||
      !formData.phone ||
      !formData.email ||
      !formData.subject ||
      !formData.query
    ) {
      setMessage({
        text: 'Please fill in all required fields.',
        type: 'error',
      });
      return;
    }

    setLoading(true);
    try {
      const response = await addContact(formData);
      console.log(response, 'response34343434');
      if (response.status === 200) {
        setMessage({
          text: 'Your query has been submitted successfully!',
          type: 'success',
        }); 
        setFormData({ name: '', phone: '', email: '', subject: '', query: '' });
      } else {
        setMessage({
          text: 'Something went wrong. Please try again later.',
          type: 'error',
        });
      }
    } catch (err) {
      const serverMsg = err.response?.data?.message;
      setMessage({
        text: serverMsg || 'Unable to submit at this time. Please try again.',
        type: 'error',
      });
    } finally {
      setLoading(false);
    }
  };

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
              For any questions, feedback, or issues, please complete the form:
            </h6>
            {message.text && (
              <div
                className={`alert ${
                  message.type === 'success' ? 'alert-success' : 'alert-danger'
                }`}
                role="alert"
              >
                {message.text}
              </div>
            )}
            <form onSubmit={onSubmit} noValidate>
              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Name *"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="tel"
                  className="form-control"
                  id="phone"
                  placeholder="Mobile Number *"
                  pattern="[0-9]{10}"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Email *"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  placeholder="Subject *"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <textarea
                  className="form-control"
                  id="query"
                  rows="4"
                  placeholder="Type your query here *"
                  value={formData.query}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={loading}
              >
                {loading ? 'Sending...' : 'Send Your Query'}
              </button>
            </form>
          </div>

          <div className={classes.contactContent}>
            <h2>Other Ways to Reach Us</h2>
            <p>
              <strong>Email:</strong>{' '}
              <a href="mailto:support@winbibo.com">support@winbibo.com</a>
            </p>
            <p>
              <strong>Phone (WhatsApp):</strong> +91 8072177472
            </p>
            <p>
              <strong>Address:</strong> Winbibo Games., 1/73 Bus stand, Trichy, Tamil Nadu, India.
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
