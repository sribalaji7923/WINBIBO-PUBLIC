import React from 'react';
import classes from './../aboutGame/aboutGame.module.scss';

const FreeStyle = ({ freeStyle }) => {
  const { title, subTitle, body } = freeStyle;
  return (
    <div className="container">
      <div className={classes.aboutGameMain}>
        <div className="row">
          <div class="col-12">
            <div className={classes.aboutContent}>
              <h6>{title}</h6>
              <h3>{subTitle}</h3>
              <p>{body}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FreeStyle;
