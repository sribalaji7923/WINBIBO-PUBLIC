import React from 'react';
import styles from './style.module.scss';

const NoDataComponent = () => {
  return (
    <div className={styles.noDataComponent}>
      <img src="images/noData.svg" alt="NoData" className={styles.noDataImg} />
      <h2 className={styles.noDataHead}>NO DATA FOUND!!</h2>
    </div>
  );
};

export default NoDataComponent;
