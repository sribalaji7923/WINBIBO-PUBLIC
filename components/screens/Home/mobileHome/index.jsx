import React from 'react';
import {
  MobileBanner,
  ReasonToPlay,
  SkillGames,
  HowToInstall,
  FollowUs,
} from './components';
import FaqCommon from '@/components/common/FaqCommon';
import { faqHomeData } from '@/service/constant'; 

export const MobileHome = () => {
  return (
    <div style={{ padding: '0px 20px' }}> 
        <MobileBanner />
        <SkillGames />
        {/* <HowToInstall /> */}
        <ReasonToPlay />
        <FaqCommon
          faqData={faqHomeData}
          title="MORE QUESTIONS?"
          subtitle="Here are our FAQ’s"
        />
        <FollowUs /> 
    </div>
  );
};
