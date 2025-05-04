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
  aboutGameFantasyCricket,
  freeStyleFantasyCricket,
  playGamesFantasyCricket,
  whyPlayGamesFantasyCricket,
  commonTermsFantasyCricket,
  tipsTricksFantasyCricket,
  fantasyCricketFaq,
} from '@/service/constant';

export const FantasyCricketDetails = () => {
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
        <AboutGame aboutGame={aboutGameFantasyCricket} isKey={2} />
        <FreeStyle freeStyle={freeStyleFantasyCricket} />
        <DownloadGames />
        {/* <div style={{ paddingBottom: '30px' }}>
          <HowToInstall />
        </div> */}
        <PlayGame playGames={playGamesFantasyCricket} />
        <WhyPlay whyPlayGames={whyPlayGamesFantasyCricket} />
        <CommmonTerms commonTerm={commonTermsFantasyCricket} />
        <CommmonTerms commonTerm={tipsTricksFantasyCricket} />
        <FaqCommon
          faqData={fantasyCricketFaq}
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
