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
import classes from './gameDetails.module.scss';
import { DesktopBanner } from '../Home/desktopHome/components';
import {
  aboutGame2048,
  freeStyle2048,
  playGames2048,
  whyPlayGames2048,
  commonTerms2048,
  tipsTricks2048,
  game2048Faq,
} from '@/service/constant';

export const TwoZeroFourEightDetails = () => {
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
        </div>{' '}
        <AboutGame aboutGame={aboutGame2048} />
        <FreeStyle freeStyle={freeStyle2048} />
        <DownloadGames />
        <div style={{ paddingBottom: '30px' }}>
          <HowToInstall />
        </div>
        <PlayGame playGames={playGames2048} />
        <WhyPlay whyPlayGames={whyPlayGames2048} />
        <CommmonTerms commonTerm={commonTerms2048} />
        <CommmonTerms commonTerm={tipsTricks2048} />
        <FaqCommon
          faqData={game2048Faq}
          title="MORE QUESTIONS?"
          subtitle="Here are our FAQ’s"
        />
        <SkillGames />
        <FollowUs />
      </div>
      <div>
        <Footer isFloat />
      </div>
    </>
  );
};
