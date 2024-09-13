import React from 'react';
import AboutGame from './components/aboutGame';
import FreeStyle from './components/freeStyle';
import DownloadGames from './components/downloadGames';
import { HowToInstall } from '../Home/mobileHome/components/HowToInstall';
import PlayGame from './components/playGame';
import WhyPlay from './components/whyPlay';
import { MobileBanner, SkillGames } from '../Home/mobileHome/components';
import CommmonTerms from './components/commonTerms';
import FaqCommon from '@/components/common/FaqCommon';
import { FollowUs } from '../Home/mobileHome/components/FollowUs';
import { Header } from '../Header';
import { Footer } from '../Footer';
import { DesktopBanner } from '../Home/desktopHome/components';
import classes from './gameDetails.module.scss';
import {
  aboutGameBallonPop,
  freeStyleBallonPop,
  playGamesBalloonPop,
  whyPlayGamesBalloonPop,
  commonTermsBalloonPop,
  tipsTricksBalloonPop,
  balloonGameFaq,
} from '@/service/constant';

export const BalloonPopDetails = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Header isFloat />
      </div>
      <div style={{ padding: '0px 20px' }}>
        <div className={classes.detailsMobile}>
          <MobileBanner title="India's Trusted Real Cash Balloon Game Online" />
        </div>
        <div className={classes.detailsDesktop}>
          <DesktopBanner />
        </div>
        <AboutGame aboutGame={aboutGameBallonPop} />
        <FreeStyle freeStyle={freeStyleBallonPop} />
        <DownloadGames />
        <HowToInstall />
        <PlayGame playGames={playGamesBalloonPop} />
        <WhyPlay whyPlayGames={whyPlayGamesBalloonPop} />
        <CommmonTerms commonTerm={commonTermsBalloonPop} />
        <CommmonTerms commonTerm={tipsTricksBalloonPop} />
        <SkillGames />
        <FaqCommon
          faqData={balloonGameFaq}
          title="MORE QUESTIONS?"
          subtitle="Here are our FAQ’s"
        />
        <FollowUs />
      </div>
      <div>
        <Footer isFloat />
      </div>
    </>
  );
};
