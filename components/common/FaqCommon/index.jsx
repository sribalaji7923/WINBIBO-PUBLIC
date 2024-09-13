import React, { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';
import classes from './faq.module.scss';

const FaqCommon = ({ faqData, title, subtitle }) => {
  const [activeIndex, setActiveIndex] = useState(null);

  const handleAccordionClick = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="container">
      <div className="faq">
        <div className={classes.faqMain}>
          {subtitle && <h6>{subtitle}</h6>}
          {title && <h3>{title}</h3>}
          <div className={classes.accordion}>
            <Accordion
              activeKey={activeIndex !== null ? activeIndex.toString() : ''}
              onSelect={(index) =>
                setActiveIndex(index !== null ? parseInt(index) : null)
              }
            >
              {faqData.map((item, index) => (
                <Accordion.Item eventKey={index.toString()} key={index}>
                  <Accordion.Header onClick={() => handleAccordionClick(index)}>
                    {item.question}
                    <img
                      src={
                        activeIndex === index
                          ? '/images/faq_down_arrow.png'
                          : '/images/faq_up_arrow.png'
                      }
                      alt="arrow icon"
                      className={classes.arrowIcon}
                    />
                  </Accordion.Header>
                  <Accordion.Body>
                    {item.answer && <p>{item.answer}</p>}
                    {item.details?.length > 0 && (
                      <>
                        {item.subHead && <p>{item.subHead}</p>}
                        <ul>
                          {item.details.map((detail, key) => (
                            <li key={key}>
                              <strong>{detail.title}</strong> {detail.subTitle}
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                    {item.steps?.length > 0 && (
                      <>
                        {item.subHead && <p>{item.subHead}</p>}
                        <ol>
                          {item.steps.map((step, key) => (
                            <li key={key}>{step.step}</li>
                          ))}
                        </ol>
                      </>
                    )}
                    {item.stepsIOS?.length > 0 && (
                      <>
                        {item.subHeadIOS && <p>{item.subHeadIOS}</p>}
                        <ol>
                          {item.stepsIOS.map((step, key) => (
                            <li key={key}>{step.step}</li>
                          ))}
                        </ol>
                      </>
                    )}
                  </Accordion.Body>
                </Accordion.Item>
              ))}
            </Accordion>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FaqCommon;
