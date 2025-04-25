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
  aboutGameRockPaperScissors,
  freeStyleRockPaperScissors,
  playGamesRockPaperScissors,
  whyPlayGamesRockPaperScissors,
  commonTermsRockPaperScissors,
  tipsTricksRockPaperScissors,
  rockPaperScissorsFaq,
} from '@/service/constant';

export const BalloonPopDetails = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Header isFloat />
      </div>
      <div style={{ padding: '0px 20px' }}>
        <div className={classes.detailsMobile}>
          <MobileBanner title="India's Trusted Real Cash Rock Paper Scissors Game Online" />
        </div>
        <div className={classes.detailsDesktop}>
          <DesktopBanner />
        </div>
        <AboutGame aboutGame={aboutGameRockPaperScissors} />
        <FreeStyle freeStyle={freeStyleRockPaperScissors} />
        <DownloadGames />
        <HowToInstall />
        <PlayGame playGames={playGamesRockPaperScissors} />
        <WhyPlay whyPlayGames={whyPlayGamesRockPaperScissors} />
        <CommmonTerms commonTerm={commonTermsRockPaperScissors} />
        <CommmonTerms commonTerm={tipsTricksRockPaperScissors} />
        <SkillGames />
        <FaqCommon
          faqData={rockPaperScissorsFaq}
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
