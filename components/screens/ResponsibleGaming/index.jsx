import React from 'react';
import classes from './responsible.module.scss';

const ResponsibleGamingComponent = () => {
  return (
    <div className={`${classes.responsible} container`}>
      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>Responsible Gaming at Winbibo</h2>
          <p>
            At Winbibo Games, we are committed to promoting responsible gaming
            practices. We believe gaming should be a source of entertainment,
            enjoyed within healthy limits, and never to the detriment of your
            mental, physical, or financial well-being. With the right approach,
            our games can offer a fun and engaging experience while helping to
            enhance decision-making, strategy, and quick thinking.
          </p>
          <p>
            We strive to create an enjoyable environment, and as a responsible
            gaming platform, we take the following steps to ensure a safe and
            secure experience for all users:
          </p>
          <ul className={classes.disc}>
            <li>
              We comply with all applicable laws and regulations governing
              real-money gaming to ensure a safe gaming environment.
            </li>
            <li>
              Only users aged 18+ can participate in our games. We verify age
              through screening techniques to ensure responsible participation.
            </li>
            <li>
              Clear and detailed game rules are provided before each game. These
              rules are accessible within the app at all times in both video and
              text formats.
            </li>
            <li>
              Our customer care team is available 24/7 at{' '}
              <a href="mailto:support@winbibo.com">support@winbibo.com</a> to
              assist with any concerns.
            </li>
            <li>
              We offer a variety of game and tournament options to cater to
              different preferences, ensuring users can choose games that suit
              their comfort level.
            </li>
          </ul>
          <p>
            Gaming can be engaging, but we understand the potential for
            addiction if not approached with care. To help you enjoy gaming
            without falling into unhealthy habits, we encourage the following
            DOs and DON’Ts:
          </p>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>DO'S</h2>
          <ul className={classes.disc}>
            <li>
              Play for fun and entertainment, not as a means of generating
              income or affecting your financial well-being.
            </li>
            <li>
              Set a budget in advance and only use disposable income that you
              can afford to lose.
            </li>
            <li>
              Limit the time you spend playing and avoid exceeding your set
              playtime.
            </li>
            <li>
              Set deposit limits to ensure that you don’t overspend beyond your
              budget.
            </li>
            <li>
              If you’re experiencing a losing streak, take a break to avoid
              making impulsive decisions.
            </li>
            <li>
              Contact our support team if you feel that your gaming habits are
              becoming problematic.
            </li>
          </ul>
        </div>
      </div>

      <div className={classes.privacyMain}>
        <div className={classes.privacyHead}>
          <h2>DON'TS</h2>
          <ul className={classes.disc}>
            <li>
              Don’t play games with the intention of earning money or recovering
              losses.
            </li>
            <li>
              Avoid playing impulsively or making rash decisions while playing.
            </li>
            <li>Don’t borrow money to fund your gaming sessions.</li>
            <li>
              Avoid playing if you're stressed or not in the right mental state,
              as this can negatively impact your decisions.
            </li>
            <li>
              Don’t chase your losses. Instead, focus on improving your skills
              and learning from previous games.
            </li>
            <li>
              Monitor how much time and money you spend on games to avoid
              overindulgence.
            </li>
            <li>
              Don’t play during work or important engagements. Ensure your mind
              is free from distractions.
            </li>
            <li>
              Always maintain a respectful attitude towards other players and
              avoid engaging in abusive or inappropriate behavior.
            </li>
          </ul>
          <p>
            If you need further assistance or guidance, feel free to reach out
            to us at{' '}
            <a href="mailto:support@winbibo.com">support@winbibo.com</a>, and
            we’ll be happy to help.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResponsibleGamingComponent;
