import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import classes from './header.module.scss';
import Icon from '@/service/icon'; 
import { handleRedirectGameScreen } from '@/service/utilities';

export const Header = ({ isFloat = false }) => {
  const [show, setShow] = useState(false);
  const [activeKey, setActiveKey] = useState('0');
  const [activeSubKey, setActiveSubKey] = useState('');
  const [isScrolled, setIsScrolled] = useState(false);
  const [showFloatMain, setShowFloatMain] = useState(false);
  const [showCard, setShowCard] = useState(false);
  const cardRef = useRef(null);

  const handleShowCard = () => {
    setShowCard(true);
  };

  const handleClickOutside = (event) => {
    if (cardRef.current && !cardRef.current.contains(event.target)) {
      setShowCard(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const toggleAccordion = (key) => {
    setActiveKey(activeKey === key ? null : key);
  };

  const toggleSubAccordion = (key) => {
    setActiveSubKey(activeSubKey === key ? null : key);
  };
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 55) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
      if (window.scrollY > 395 && isFloat) {
        setShowFloatMain(true);
      } else {
        setShowFloatMain(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [isFloat]);



  return (
    <div>
      <header
        className={`${classes.header} ${isScrolled ? classes.fixedHeader : ''}`}
      >
        <div className="container">
          <div className={classes.navbar}>
            <div className={classes.logo}>
              <Link href="/">
                <img src="/images/logo_black.svg" alt="Logo" />
              </Link>
            </div>
            <div className={classes.menuIcon} onClick={handleShow}>
              <img src="/images/menu_icon.png" alt="menuIcon" />
            </div>
            <div className={classes.navItems}>
              <a
                onClick={handleShowCard}
                style={{ fontWeight: 400, color: '#fff' }}
              >
                All Games
                <Icon
                  iconName="chevron-down"
                  iconColor="#fff"
                  fontSize="12px"
                />
              </a>
              <Link href="/about-winbibo">About Us</Link>
              <Link href="/faq">FAQ's</Link>{' '}
              <Link href="/contact-us">Contact Us</Link>{' '}
              <div
                ref={cardRef}
                className={`${classes.gameCard} ${
                  showCard ? classes.desktopAllShow : classes.desktopAllHide
                }`}
              >
                <div className={classes.accordionBodyDesktop}>
                  <div className={classes.accordionItemDesktop}>
                    <div
                      className={classes.accordionHeaderDesktop}
                      onClick={() => toggleSubAccordion('0-1')}
                    >
                      <a> Casual Games </a>
                      {activeSubKey === '0-1' ? (
                        <Icon iconName="minus" fontSize="14px" />
                      ) : (
                        <Icon iconName="plus" fontSize="14px" />
                      )}
                    </div>
                    {activeSubKey === '0-1' && (
                      <div className={classes.accordionBodyDesktop}>
                        <ul>
                          <li>
                            <Link href="/casual-games/rps">
                              Rock Paper Scissors
                            </Link>{' '}
                          </li>
                          <li>
                            <Link href="/casual-games/2048">2048</Link>{' '}
                          </li>
                        </ul>
                      </div>
                    )}
                  </div>
                  {/* <div className={classes.accordionItemDesktop}>
                    <div
                      className={classes.accordionHeaderDesktop}
                      onClick={() => toggleSubAccordion('0-2')}
                    >
                      <a> Fantasy Games </a>
                      {activeSubKey === '0-2' ? (
                        <Icon iconName="minus" fontSize="14px" />
                      ) : (
                        <Icon iconName="plus" fontSize="14px" />
                      )}
                    </div>
                    {activeSubKey === '0-2' && (
                      <div className={classes.accordionBodyDesktop}>
                        <ul>
                          <li>
                            <Link href="/fantasy-games/cricket">
                              Fantasy Cricket
                            </Link>{' '}
                          </li>
                        </ul>
                      </div>
                    )}
                  </div> */}
                </div>
              </div>
            </div>
          </div>
          {show && (
            <div className={classes.backdrop} onClick={handleClose}></div>
          )}
          <div className={`${classes.offcanvas} ${show ? classes.show : ''}`}>
            <div className={classes.offBody}>
              <div className={classes.closeIcon}>
                <Icon
                  iconName="circle-x"
                  fontSize="22px"
                  onClick={handleClose}
                />
              </div>
              <div className={classes.accordionMenu}>
                <div className={`${classes.accordionItem} ${classes.initList}`}>
                  <div
                    id="title"
                    className={classes.accordionHeader}
                    onClick={() => toggleAccordion('0')}
                  >
                    <div className={classes.allGames}>All Games </div>
                    {activeKey === '0' ? (
                      <Icon iconName="minus" fontSize="14px" />
                    ) : (
                      <Icon iconName="plus" fontSize="14px" />
                    )}
                  </div>
                  {activeKey === '0' && (
                    <div className={classes.accordionBody}>
                      <div className={classes.accordionItem}>
                        <div
                          className={classes.accordionHeader}
                          onClick={() => toggleSubAccordion('0-1')}
                        >
                          Casual Games{' '}
                          {activeSubKey === '0-1' ? (
                            <Icon iconName="minus" fontSize="14px" />
                          ) : (
                            <Icon iconName="plus" fontSize="14px" />
                          )}
                        </div>
                        {activeSubKey === '0-1' && (
                          <div className={classes.accordionBody}>
                            <ul>
                              <li>
                                <Link href="/casual-games/rps">
                                  Rock Paper Scissors
                                </Link>{' '}
                              </li>
                              <li>
                                <Link href="/casual-games/2048">2048</Link>{' '}
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                      <div className={classes.accordionItem}>
                        <div
                          className={classes.accordionHeader}
                          onClick={() => toggleSubAccordion('0-2')}
                        >
                          Fantasy Games{' '}
                          {activeSubKey === '0-2' ? (
                            <Icon iconName="minus" fontSize="14px" />
                          ) : (
                            <Icon iconName="plus" fontSize="14px" />
                          )}
                        </div>
                        {activeSubKey === '0-2' && (
                          <div className={classes.accordionBody}>
                            <ul>
                              <li>
                                <Link href="/fantasy-games/cricket">
                                  Fantasy Cricket
                                </Link>{' '}
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
                <div className={classes.simpleList}>
                  <h5>
                    <Link href="/about-winbibo"> About Us</Link>
                  </h5>
                </div>
                <div className={classes.simpleList}>
                  <h5>
                    <Link href="/faq">FAQ's</Link>{' '}
                  </h5>
                </div>
                <div className={classes.simpleList}>
                  <h5>
                    <Link href="/contact-us">Contact Us</Link>{' '}
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {isFloat && (
        <div className={`${showFloatMain ? classes.floatMain : 'd-none'}`}>
          <div className={classes.freeCash}>
            <p>Get Rs. 10 Free Cash</p>
          </div>
          <div className={classes.floatBtn}>
            <div className="downBtn">
              <button onClick={handleRedirectGameScreen}>Play Now</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
