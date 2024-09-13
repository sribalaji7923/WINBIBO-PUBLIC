import React from 'react';
import classNames from 'classnames'; // Use this for conditional classNames
import classes from './followUs.module.scss';

export const FollowUs = ({ onlyContent = false }) => {
  const socialLinks = [
    { src: '/images/connect/facebook.png', alt: 'Facebook' },
    { src: '/images/connect/instagram.png', alt: 'Instagram' },
    { src: '/images/connect/telegram.png', alt: 'Telegram' },
    { src: '/images/connect/twitter.png', alt: 'Twitter' },
    { src: '/images/connect/youtube.png', alt: 'YouTube' },
  ];

  return (
    <div
      className={classNames(classes.followUs, {
        [classes.onlyContent]: onlyContent,
      })}
    >
      {!onlyContent && (
        <>
          <h6>Connect &</h6>
          <h3>Follow us on</h3>
        </>
      )}
      <div
        className={classNames(classes.shareIcon, {
          [classes.justifyEnd]: onlyContent,
          [classes.justifyCenter]: !onlyContent,
        })}
      >
        {socialLinks.map((link, index) => (
          <img key={index} src={link.src} alt={link.alt} />
        ))}
      </div>
    </div>
  );
};
