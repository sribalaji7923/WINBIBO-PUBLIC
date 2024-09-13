import React from 'react';
import { MobileHome } from './mobileHome';
import { DesktopHome } from './desktopHome';
import classes from './home.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

const HomeComponent = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Header isFloat />
      </div>
      <div className={classes.home}>
        <div className={classes.mobile}>
          <MobileHome />
        </div>
        <div className={classes.desktop}>
          <DesktopHome />
        </div>
      </div>
      <div>
        <Footer isFloat />
      </div>
    </>
  );
};

export default HomeComponent;
