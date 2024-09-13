import React from 'react';
import styles from './mainlayout.module.scss';

const MainLayout = ({ children }) => {
  return (
    <div>
      <div className={styles.mainLayout}>
        <div>{children}</div>
      </div>
    </div>
  );
};

export default MainLayout;
