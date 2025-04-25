import React, { useState, useEffect } from 'react';
import classes from './howToInstall.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

export const HowToInstall = () => {
  const [showSteps, setShowSteps] = useState(false);
  const handleMoreClick = () => {
    setShowSteps(true);
  };
  return (
    <div className="container">
      <div className={classes.installMain}>
        <h6>How To</h6>
        <h3>Install Winbibo App</h3>
        <p>
          Follow the steps below to install the app and start playing exciting
          skill-based games like Rock Paper Scissors, 2048, and fantasy cricket.
          {!showSteps && (
            <a onClick={handleMoreClick} style={{ cursor: 'pointer' }}>
              ...more
            </a>
          )}
        </p>
        {showSteps && (
          <>
            {' '}
            <div className={classes.installSteps}>
              <p className={classes.stepTitle}>For Android:</p>
              <ol type="1">
                <li>
                  Click the <span>Download App</span> button to start the
                  installation.
                </li>
                <li>
                  You will see a prompt to <span>Add to Home Screen.</span> Tap
                  it.
                </li>
                <li>
                  The app will be added to your home screen. Open it, sign up,
                  and start playing.
                </li>
              </ol>
            </div>
            <div className={classes.installSteps}>
              <p className={classes.stepTitle}>For iOS:</p>
              <ol type="1">
                <li>
                  Click the <span>Download App</span> button.
                </li>
                <li>
                  Tap the <span>share icon</span> (it may be at the bottom or
                  top of your screen, depending on your device).
                </li>
                <li>
                  Select <span>Add to Home Screen</span> from the options.
                </li>
                <li>
                  The app will be added to your home screen. Open it, sign up,
                  and enjoy playing.
                </li>
              </ol>
            </div>
          </>
        )}
        <div className="installSlider">
          <Swiper
            className={classes.homeSlider}
            spaceBetween={30}
            slidesPerView={1}
            autoplay={{
              delay: 5000,
              disableOnInteraction: false,
            }}
            loop={true}
            speed={2000}
            pagination={{
              el: `.installCustomPagination`,
              clickable: true,
              renderBullet: (index, className) => {
                return `<span class="${className} ${classes.bullet}">${
                  index + 1
                }</span>`;
              },
            }}
            navigation={{
              nextEl: `.installCustomNext`,
              prevEl: `.installCustomPrev`,
            }}
            breakpoints={{
              320: {
                slidesPerView: 1,
              },
              768: {
                slidesPerView: 3,
              },
            }}
            modules={[Autoplay, Pagination, Navigation]}
          >
            <SwiperSlide>
              <div className={classes.installCard}>
                <div className={classes.step}>
                  <p>Step 1</p>
                  <h6>Click “Download” Button to continue.</h6>
                </div>
                <img src="/images/how_to_install/step_1.png" alt="step1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.installCard}>
                <div className={classes.step}>
                  <p>Step 2</p>
                  <h6>Click “Install” Button to continue.</h6>
                </div>
                <img src="/images/how_to_install/step_1.png" alt="step1" />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div className={classes.installCard}>
                <div className={classes.step}>
                  <p>Step 3</p>
                  <h6>Click “Open” Button to continue.</h6>
                </div>
                <img src="/images/how_to_install/step_1.png" alt="step1" />
              </div>
            </SwiperSlide>
          </Swiper>
          <div className="installCustomPagination"></div>
          <div className="installCustomPrev">←</div>
          <div className="installCustomNext">→</div>
        </div>
      </div>
    </div>
  );
};
