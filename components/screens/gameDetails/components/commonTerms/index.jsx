import React from 'react';
import classes from './commonTerms.module.scss';

const CommmonTerms = ({ commonTerm }) => {
  const { title, subTitle, body, steps } = commonTerm;
  return (
    <div className="container">
      <div className={classes.downloadMain}>
        <div className="row">
          <div class="col-12">
            <div className={classes.aboutContent}>
              <h6>{title}</h6>
              <h3>{subTitle}</h3>
              <p>{body}</p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className={classes.downloadCard}>
              <div className={classes.downloadBody}>
                <ul>
                  {steps.map((item, key) => (
                    <li key={key}>{item.step}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CommmonTerms;
