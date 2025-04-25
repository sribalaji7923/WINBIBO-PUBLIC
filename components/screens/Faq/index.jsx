import React from 'react';
import { FollowUs } from '../Home/mobileHome/components/FollowUs';
import FaqCommon from '@/components/common/FaqCommon';
import classes from './faq.module.scss';
import { Header } from '../Header';
import { Footer } from '../Footer';

const generalAccount = [
  {
    question: 'What is Winbibo and how does it work?',
    answer:
      'Winbibo is a skill-based gaming platform where you can compete in exciting games like Rock Paper Scissors, 2048, and fantasy cricket. Use your skills to play against real players and win rewards.',
  },
  {
    question: 'I am under 18 years old. Can I play on Winbibo?',
    answer:
      'As per legal requirements, only players aged 18 years or above are allowed to play on Winbibo.',
  },
  {
    question: 'What games are offered and how do I play them?',
    answer:
      'Winbibo currently offers games like Rock Paper Scissors, 2048, and fantasy cricket. Stay tuned for more exciting games coming soon! You can find the game rules in each game’s FAQ section.',
  },
  {
    question: 'How do I download and install the app?',
    answer: '',
    subHead: 'For Android:',
    steps: [
      {
        step: 'Click the "Download App" button to start the installation.',
      },
      {
        step: 'You will see a prompt to "Add to Home Screen." Tap it.',
      },
      {
        step: 'The app will be added to your home screen. Open it, sign up, and start playing.',
      },
    ],
    subHeadIOS: 'For iOS:',
    stepsIOS: [
      {
        step: 'Click the "Download App" button.',
      },
      {
        step: 'Tap the share icon (it may be at the bottom or top of your screen, depending on your device).',
      },
      {
        step: 'Select "Add to Home Screen" from the options.',
      },
      {
        step: 'The app will be added to your home screen. Open it, sign up, and enjoy playing.',
      },
    ],
  },
  {
    question: 'How do I log in for the first time?',
    answer: '',
    details: [
      {
        subTitle: 'Log in using your mobile number.',
      },
      {
        subTitle: 'Enter the OTP sent via SMS to complete your registration.',
      },
      {
        subTitle:
          'For a smooth payment experience, ensure your mobile number matches your UPI account number.',
      },
    ],
  },
  {
    question: 'Why am I unable to play from my region/state?',
    answer:
      'Due to legal restrictions, Winbibo may not be available in certain regions. If you’re in a restricted state, you will not be able to access our platform.',
  },
  {
    question: 'I am unable to receive the OTP for login.',
    answer:
      'Try tapping the "Resend OTP" button and wait for a minute. If the issue persists, please contact us at support@winbibo.com.',
  },
  {
    question: 'Can I change my registered mobile number?',
    answer:
      'Currently, there is no option to change the registered mobile number. Please ensure the number you sign up with is correct.',
  },
  {
    question: 'Can I create multiple accounts?',
    answer:
      'Your Winbibo account is linked to your mobile number and device. For security reasons, each player can only have one account.',
  },
  {
    question: 'Can I change my UPI ID?',
    answer:
      'Once your UPI ID is added, it cannot be changed. However, you can create a support ticket via the Help section or contact us at support@winbibo.com for further assistance.',
  },
  {
    question: 'Can I deactivate/delete my account?',
    answer:
      'Currently, there is no option to deactivate or delete your account. For assistance, please contact our customer support team via the Help section or at support@winbibo.com.',
  },
  {
    question: 'Is my personal information secure?',
    answer:
      'Yes, we prioritize the security and privacy of your data. We use advanced tools to ensure your personal information is protected.',
  },
];

const gamePlay = [
  {
    question: 'What is Responsible Gaming?',
    answer:
      'Responsible Gaming means playing for enjoyment, not as a way to make money. At Winbibo, we encourage players to follow these guidelines for Responsible Gaming:',
    steps: [
      {
        step: '- Play only with money you can afford to lose.',
      },
      {
        step: '- Never use money set aside for essential expenses, such as rent, food, or bills.',
      },
      {
        step: '- Avoid playing when feeling upset, tired, or stressed. Never borrow money to play.',
      },
      {
        step: '- Limit your playing time and take regular breaks.',
      },
      {
        step: '- Balance gaming with other activities and responsibilities.',
      },
    ],
  },
  {
    question: 'Can I play Winbibo games on my PC/Laptop?',
    answer:
      'Winbibo is designed as a mobile-first gaming platform for a seamless experience on mobile devices.',
  },
  {
    question: 'Who will be my opponent?',
    answer:
      'You will be randomly matched with another Winbibo player who has selected the same game and match level as you.',
  },
  {
    question: 'Can I play with friends?',
    answer:
      'Currently, we do not offer an option to play with friends. However, we are working to bring this feature soon. Stay tuned for updates!',
  },
  {
    question: 'What is the minimum amount to play the game?',
    answer:
      'The minimum entry fee for each game is displayed on the game entry card before you start playing.',
  },
  {
    question: 'When is the entry fee deducted?',
    answer:
      'The entry fee is deducted from your Winbibo account as soon as you are matched with your opponent(s). If you exit while waiting for an opponent, the fee is still deducted.',
  },
  {
    question: 'What happens if I don’t get matched with an opponent?',
    answer:
      'If you don’t get matched with an opponent, your entry fee will not be deducted, and you can try again.',
  },
  {
    question: 'What happens if I get disconnected during the game?',
    answer:
      'If you are disconnected, Winbibo will try to reconnect you. If reconnection isn’t possible, you will lose the game and the entry fee.',
  },
  {
    question: 'What if there are technical issues during gameplay?',
    answer:
      'If there is a technical issue and your entry fee is deducted, it will be refunded to your Winbibo account.',
  },
  {
    question: 'Can I pause the game in the middle?',
    answer:
      'No, pausing is not allowed during gameplay as most games are multiplayer and time-bound. Pausing would disrupt the game for other players.',
  },
  {
    question: 'What happens if I minimize the app while playing?',
    answer:
      'Minimizing the app, such as for taking a call or answering a message, will disconnect you from the server, and you will lose the game along with the entry fee.',
  },
  {
    question:
      'Where can I see my score and my opponent’s score during gameplay?',
    answer:
      'Live scores for both players will be displayed at the top of the screen during gameplay.',
  },
  {
    question:
      'What happens if I quit the game while my opponent is still playing?',
    answer:
      'If you quit while the opponent is still playing, you will lose the game and forfeit your entry fee.',
  },
  {
    question: 'When do I receive my winnings?',
    answer:
      'Your winnings will be credited to your Winbibo account immediately after you are declared the winner.',
  },
  {
    question: 'What is cheating?',
    answer:
      'Cheating, such as hacking, using multiple accounts, or colluding with other players, is strictly prohibited. Players caught cheating will face account restrictions, and winnings will only be withdrawn once KYC verification is completed. Violators may face legal consequences.',
  },
];

const bonus = [
  {
    question: 'What is a Cashback on Winbibo?',
    answer:
      'Cashback is a reward provided to new users when they sign up. After completing signup and OTP verification, you’ll receive ₹10 cashback in your wallet, which can be used to play any games without restrictions.',
  },
  {
    question: 'How does Cashback work?',
    answer:
      'Once you sign up and complete OTP verification, ₹10 is instantly added to your Winbibo wallet. This amount can be used to play any game on the platform without limitations.',
  },
  {
    question: 'I didn’t get my Signup Cashback.',
    answer:
      'If you didn’t receive your ₹10 signup cashback after completing OTP verification, please contact our support team at support@winbibo.com for assistance.',
  },
  {
    question: 'Where can I see my Signup Cashback?',
    answer:
      'You can check your signup cashback in your Winbibo wallet under the “Available Balance” section.',
  },
  {
    question: 'I didn’t get a cashback while adding money.',
    answer:
      'Currently, cashback is only provided upon signup. No additional cashback is given for adding money to your wallet.',
  },
  {
    question: 'What are Daily Rewards?',
    answer:
      'All users receive daily rewards, which include free entry into 2 games each day. These free entries allow you to enjoy gaming without using any money.',
  },
];

const deposit = [
  {
    question: 'What deposit benefits can I get on Winbibo?',
    answer: '',
    steps: [
      {
        step: 'Depending on the deposit package you choose, you could receive:',
      },
      {
        step: 'Cashback added to your Winbibo wallet.',
      },
      {
        step: 'Access to exclusive promotions and rewards.',
      },
    ],
  },
  {
    question: 'I made a deposit, but it’s not showing in my Winbibo wallet.',
    answer:
      'This may occur due to technical issues. The amount will either be credited to your Winbibo wallet or refunded to your bank account within 2 working days.',
  },
  {
    question:
      'My deposit is pending, and the money has been debited from my account.',
    answer:
      'This can happen due to technical reasons. The debited amount should be reflected in your Winbibo wallet or original payment source within 72 hours. If not, please contact our Customer Support for assistance.',
  },
  {
    question: 'What is the minimum deposit amount on Winbibo?',
    answer: 'The minimum deposit amount is ₹10.',
  },
];

const withdrawals = [
  {
    question: 'How do I withdraw my winnings on Winbibo?',
    answer: '',
    subHead: 'To withdraw your winnings:',
    steps: [
      {
        step: 'Tap on the "Account" tab.',
      },
      {
        step: 'On the Account page, tap "Withdraw".',
      },
      {
        step: 'On the next page, you will see your available winnings. Enter the amount you wish to withdraw in the text field.',
      },
      {
        step: 'Tap "Next" to review the details and choose your withdrawal method (UPI or bank account).',
      },
      {
        step: 'If everything looks good, tap "Confirm" to initiate the withdrawal.',
      },
      {
        step: 'The withdrawal process will begin, and you can either wait for the confirmation or continue playing games on Winbibo.',
      },
      {
        step: 'Withdrawals are usually processed instantly, but they may take longer to reflect in your account in some cases.',
      },
    ],
  },
  {
    question: 'What is the minimum amount to withdraw?',
    answer: 'The minimum withdrawal amount is ₹60.',
  },
  {
    question: 'How often can I withdraw?',
    answer: 'You can make a withdrawal once every 12 hours.',
  },
  {
    question: 'What are the available withdrawal methods?',
    answer:
      'You can withdraw your winnings via UPI or directly to your bank account.',
  },
  {
    question: 'Can I withdraw cashback or bonus cash?',
    answer:
      'No, cashback or bonus cash cannot be withdrawn. However, you can use it to play games and win more.',
  },
  {
    question: 'My winnings were deducted but not credited to my account.',
    answer:
      'Withdrawals are usually processed instantly, but in rare cases, they may take longer to appear in your account. If you don’t receive your winnings within 48 hours, please contact our Customer Support.',
  },
  {
    question: 'Is there a TDS deduction on my winnings?',
    answer:
      'There is no TDS deduction on Winbibo. We refund the full TDS amount as cashback, which can be used to play games. You keep 100% of your winnings!',
  },
];

const kyc = [
  {
    question: 'Why is KYC Verification required on Winbibo?',
    answer:
      'KYC verification is required before making withdrawals on Winbibo. You can verify either your PAN or Aadhaar for a one-time KYC process, allowing unlimited withdrawals once verified.',
  },
  {
    question: 'What happens if I don’t complete KYC Verification?',
    answer:
      'Without KYC verification, you will not be able to withdraw your winnings. Once you verify either your PAN or Aadhaar, you can make unlimited withdrawals.',
  },
  {
    question: 'Why should I provide my PAN or Aadhaar for withdrawal?',
    answer:
      'Providing either your PAN or Aadhaar ensures that your withdrawals are secure and compliant with legal regulations. Once verified, you can withdraw funds without restrictions.',
  },
  {
    question: 'How can I complete KYC on Winbibo?',
    answer:
      'To complete KYC, go to the "Account Settings" in the app and select the KYC Verification section. You can verify either your PAN or Aadhaar to enable withdrawals.',
  },
  {
    question: 'Why is my PAN or Aadhaar verification being rejected?',
    answer:
      'There could be various reasons for rejection. Please contact our customer support team at support@winbibo.com for assistance and ensure that your document details are clear and accurate.',
  },
  {
    question: 'My account is locked. How do I unlock it?',
    answer:
      'If your Winbibo account is locked, please contact our customer support team at support@winbibo.com for assistance.',
  },
  {
    question: 'Are KYC documents mandatory to withdraw money?',
    answer:
      'Yes, KYC verification is mandatory to withdraw money. Once you complete the one-time verification with either PAN or Aadhaar, you can enjoy unlimited withdrawals.',
  },
  {
    question:
      'I have uploaded the KYC documents, but they are not yet approved.',
    answer:
      'KYC verification usually takes up to 24 hours. If your documents haven’t been approved within that time, you can raise an issue ticket through the Help section in the app.',
  },
];

const leaderboard = [
  {
    question: 'What are leaderboards?',
    answer:
      'Leaderboards on Winbibo showcase the top-performing players in both casual games and fantasy cricket. They allow users to see how they rank compared to others and highlight the top winners in each category.',
  },
  {
    question: 'Can anyone participate in the leaderboards?',
    answer:
      'Yes, all users can participate in the live leaderboards for both casual games and fantasy cricket.',
  },
  {
    question: 'Can I be a part of more than one leaderboard?',
    answer:
      'Yes, you can be part of multiple leaderboards. For example, you can rank on the casual games leaderboard and the fantasy cricket leaderboard simultaneously.',
  },
  {
    question: 'What are the different types of leaderboards?',
    answer:
      'Winbibo has two types of leaderboards: one for casual games and one for fantasy cricket. In casual games, players are ranked based on the number of games won over a 7-day period. In fantasy cricket, daily match results determine the leaderboard rankings.',
  },
  {
    question: 'How do I get a better rank on the leaderboards?',
    answer:
      'To improve your rank, you need to win more games. In casual games, the top 50 players with the most wins are ranked for a 7-day leaderboard. In fantasy cricket, your performance in each day’s matches will impact your ranking.',
  },
  {
    question: 'What are the prizes on the leaderboards?',
    answer:
      'Top-ranking players on the leaderboards will receive exciting rewards, which are displayed on the leaderboard page. The higher your rank, the bigger the rewards you can earn.',
  },
];

const Faq = () => {
  return (
    <>
      <div style={{ padding: '20px' }}>
        <Header />
      </div>
      <div className={classes.faqMain}>
        <FaqCommon
          faqData={generalAccount}
          title="General & Account "
          subtitle="Frequently Asked Questions (FAQ’s)"
        />
        <FaqCommon faqData={gamePlay} title="Game Play" subtitle="" />
        <FaqCommon faqData={bonus} title="Cashback" subtitle="" />
        <FaqCommon faqData={deposit} title="Deposit" subtitle="" />
        <FaqCommon faqData={withdrawals} title="Withdrawals" subtitle="" />
        <FaqCommon faqData={kyc} title="Kyc" subtitle="" />
        <FaqCommon faqData={leaderboard} title="Leaderboard" subtitle="" />
        <FollowUs />
      </div>
      <Footer />
    </>
  );
};

export default Faq;
