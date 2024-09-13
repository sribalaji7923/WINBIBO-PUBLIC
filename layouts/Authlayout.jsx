import React from 'react';
import styles from './authlayout.module.scss';

const AuthLayout = ({ children }) => {
  return (
    <div className={styles.authLayout}>
      <div>{children}</div>
    </div>
  );
};

export default AuthLayout;
