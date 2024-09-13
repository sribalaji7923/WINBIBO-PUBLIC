import React from 'react';
import classes from './mobileHome.module.scss';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';

export const MobileBanner = ({
  aboutUs = false,
  title = 'Win Real Cash on Winbibo!',
}) => {
  return (
    <div className="mobile-banner">
      <div className={classes.topBanner}>
        <div className="row">
          <div className="col-12 ">
            {aboutUs ? (
              <h2>About Us</h2>
            ) : (
              <p className={classes.title}>{title}</p>
            )}
            {!aboutUs && (
              <>
                <h4 className={classes.bannerTitle}>
                  Play Games & Win Big in 45 Seconds!
                </h4>
                <div className={classes.certificate}>
                  <img
                    src="/images/home/rng_certificate.png"
                    alt="Rng Ceritificate"
                  />
                  <img
                    src="/images/home/Instant_withdrawals.png"
                    alt="Rng Ceritificate"
                  />
                  <img
                    src="/images/home/customer_support_mobile.png"
                    alt="Rng Ceritificate"
                  />
                </div>
              </>
            )}
            <div className={classes.sliderMain}>
              <div className={classes.mainHeading}>
                <p>₹1 Crore+</p>
                <p>Daily Cash Winnings</p>
                <div className="bannercustomPagination"></div>
              </div>
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
                  el: `.bannercustomPagination`,
                  clickable: true,
                  renderBullet: (index, className) => {
                    return `<span class="${className} ${classes.bullet}">${
                      index + 1
                    }</span>`;
                  },
                }}
                modules={[Autoplay, Pagination]}
              >
                <SwiperSlide>
                  <Image
                    src="/images/home/mobile_banner1.png"
                    alt="banner1"
                    layout="responsive"
                    width={1200}
                    height={800}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/home/mobile_banner1.png"
                    alt="banner1"
                    layout="responsive"
                    width={1200}
                    height={800}
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <Image
                    src="/images/home/mobile_banner1.png"
                    alt="banner1"
                    layout="responsive"
                    width={1200}
                    height={800}
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            <div className="downBtn" style={{ marginTop: '85px' }}>
              <button>
                <span>
                  <img src="/images/home/download_icon.png" alt="download" />
                </span>
                Download & Get 10 Free Cash
              </button>
            </div>
            <div className={classes.instantWithdraw}>
              <p>Real Cash Withdrawal games</p>
            </div>
            <div className={classes.withDrawImages}>
              <img src="/images/home/g_pay.png" alt="gPay" />
              <img src="/images/home/paytm.png" alt="paytm" />
              <img src="/images/home/phone_pe.png" alt="phonePe" />
              <img src="/images/home/bhim.png" alt="bhim" />
            </div>
            <div className={classes.arrowDown}>
              <img src="/images/home/arrow_down.png" alt="arrowDown" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
