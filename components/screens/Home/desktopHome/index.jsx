import FaqCommon from '@/components/common/FaqCommon';
import { HowToInstall } from '../mobileHome/components/HowToInstall';
import { ReasonToPlay, SkillGames } from '../mobileHome/components';
import { DesktopBanner, Certificates, InstandWithdraw } from './components';
import { faqHomeData } from '@/service/constant';

export const DesktopHome = () => {
  return (
    <div style={{ padding: '0px 20px' }}>
      <DesktopBanner />
      <Certificates />
      <InstandWithdraw />
      <SkillGames />
      {/* <HowToInstall /> */}
      <ReasonToPlay />
      <FaqCommon
        faqData={faqHomeData}
        title="MORE QUESTIONS?"
        subtitle="Here are our FAQ’s"
      />
    </div>
  );
};
