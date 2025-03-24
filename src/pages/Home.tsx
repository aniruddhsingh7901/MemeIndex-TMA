import React, { useState, useEffect, useRef } from "react";
import Ranking from "../Components/Ranking";
import Updates from "../Components/Updates";

interface HomeProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Home: React.FC<HomeProps> = ({ activeTab, setActiveTab }) => {
  // Refs for animation
  const countdownRef = useRef<HTMLDivElement>(null);
  const welcomeRef = useRef<HTMLDivElement>(null);
  const rankingRef = useRef<HTMLDivElement>(null);
  const feedRef = useRef<HTMLDivElement>(null);
  // State for countdown timer
  const [timeRemaining, setTimeRemaining] = useState({
    days: 23,
    hours: 12,
    minutes: 23,
    seconds: 23
  });

  // State for wallet connection
  const [isWalletConnected, setIsWalletConnected] = useState(false);

  // Effect for countdown timer
  useEffect(() => {
    const interval = setInterval(() => {
      if (timeRemaining.seconds > 0) {
        setTimeRemaining((prev) => ({ ...prev, seconds: prev.seconds - 1 }));
      } else if (timeRemaining.minutes > 0) {
        setTimeRemaining((prev) => ({
          ...prev,
          minutes: prev.minutes - 1,
          seconds: 59
        }));
      } else if (timeRemaining.hours > 0) {
        setTimeRemaining((prev) => ({
          ...prev,
          hours: prev.hours - 1,
          minutes: 59,
          seconds: 59
        }));
      } else if (timeRemaining.days > 0) {
        setTimeRemaining((prev) => ({
          ...prev,
          days: prev.days - 1,
          hours: 23,
          minutes: 59,
          seconds: 59
        }));
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [timeRemaining]);

  // Handle wallet connection
  const handleConnectWallet = () => {
    // This would be replaced with actual TON Connect logic
    setIsWalletConnected(true);
  };

  // Handle invite friends
  const handleInviteFriends = () => {
    // Telegram Mini App API to share with friends
    if ((window as any).Telegram?.WebApp) {
      (window as any).Telegram.WebApp.openTelegramLink("https://t.me/share/url?url=https://memeindex.org&text=Join%20the%20MemeIndex%20Battle%20Arena!");
    }
  };

  // Animation effect
  useEffect(() => {
    // Animate elements on mount
    const elements = [
      { ref: countdownRef, delay: 100 },
      { ref: welcomeRef, delay: 300 },
      { ref: rankingRef, delay: 500 },
      { ref: feedRef, delay: 700 }
    ];

    elements.forEach(({ ref, delay }) => {
      if (ref.current) {
        setTimeout(() => {
          ref.current?.classList.add('animate-in');
        }, delay);
      }
    });
  }, []);

  return (
    <div className="blue-bg pt-4 min-h-screen flex flex-col items-center text-white pb-14 min-w-full overflow-hidden" 
         style={{ 
           backgroundImage: "url('./home1.jpg')", 
           backgroundSize: "cover", 
           backgroundPosition: "center",
           backgroundBlendMode: "overlay",
           backgroundColor: "rgba(0, 111, 255, 0.85)"
         }}>
      {/* Logo and Season Banner with pixel animation */}
      <div className="flex flex-col items-center justify-center w-full mb-4 animate-pixel-fade">
        <h1 className="karmatic-text text-3xl text-center text-white mb-2 animate-glow">MEMEINDEX</h1>
        <h2 className="joystix-text text-xl text-center text-white animate-pulse-slow">BATTLE ARENA</h2>
      </div>
      
      {/* Countdown Timer with animation */}
      <div ref={countdownRef} className="flex justify-center gap-2 w-[90%] max-w-md mb-6 opacity-0 transform translate-y-4 transition-all duration-500">
        <div className="flex flex-col items-center bg-[#0052CC] p-2 rounded-lg w-20 shadow-glow animate-float">
          <span className="karmatic-text text-2xl animate-number-change">{timeRemaining.days}</span>
          <span className="text-xs">DAYS</span>
        </div>
        <div className="flex flex-col items-center bg-[#0052CC] p-2 rounded-lg w-20 shadow-glow animate-float delay-100">
          <span className="karmatic-text text-2xl animate-number-change">{timeRemaining.hours}</span>
          <span className="text-xs">HOURS</span>
        </div>
        <div className="flex flex-col items-center bg-[#0052CC] p-2 rounded-lg w-20 shadow-glow animate-float delay-200">
          <span className="karmatic-text text-2xl animate-number-change">{timeRemaining.minutes}</span>
          <span className="text-xs">MINS</span>
        </div>
        <div className="flex flex-col items-center bg-[#0052CC] p-2 rounded-lg w-20 shadow-glow animate-float delay-300">
          <span className="karmatic-text text-2xl animate-number-change">{timeRemaining.seconds}</span>
          <span className="text-xs">SECS</span>
        </div>
      </div>

      {/* Welcome Message with animation */}
      {!isWalletConnected ? (
        <div ref={welcomeRef} className="flex flex-col items-center w-[90%] max-w-md mb-6 opacity-0 transform translate-y-4 transition-all duration-500">
          <div className="bg-[#0052CC] rounded-xl p-4 w-full shadow-glow border border-[#2181FF]">
            <h3 className="joystix-text text-lg text-center mb-2 animate-pulse-slow">POWER UP</h3>
            <h2 className="joystix-text text-xl text-center mb-4 animate-glow">JOIN THE FIGHT</h2>
            <p className="text-sm text-center mb-4">
              Connect your wallet, vote coins, and participate in the ultimate meme coin battle arena! Support your favorite cryptocurrencies and earn rewards!
            </p>
            <button 
              onClick={handleConnectWallet}
              className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-sm hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] font-bold animate-button-pulse shadow-lg transform hover:scale-105"
            >
              Connect Wallet
            </button>
          </div>
        </div>
      ) : (
        <div ref={welcomeRef} className="flex flex-col items-center w-[90%] max-w-md mb-6 opacity-0 transform translate-y-4 transition-all duration-500">
          <div className="bg-[#0052CC] rounded-xl p-4 w-full shadow-glow border border-[#2181FF]">
            <h3 className="joystix-text text-lg text-center mb-2 animate-pulse-slow">WELCOME TO THE</h3>
            <h2 className="joystix-text text-xl text-center mb-4 animate-glow">BATTLE ARENA</h2>
            <p className="text-sm text-center mb-4">
              Now, experience battle in the ultimate meme coin arena! Vote for your favorite coins, climb the ranks, and earn rewards for participation!
            </p>
            <button 
              onClick={() => setActiveTab('Rank')}
              className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-sm hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] font-bold animate-button-pulse shadow-lg transform hover:scale-105"
            >
              Vote Now
            </button>
          </div>
        </div>
      )}

      {/* Ranking Component with animation */}
      <div ref={rankingRef} className="w-full opacity-0 transform translate-y-4 transition-all duration-500">
        <Ranking activeTab={activeTab} setActiveTab={setActiveTab} />
      </div>

      {/* Live Activity Feed with animation */}
      <div ref={feedRef} className="w-[90%] flex flex-col items-center justify-center gap-2 mt-4 max-w-md opacity-0 transform translate-y-4 transition-all duration-500">
        <h2 className="karmatic-text text-lg w-full text-center animate-glow">LIVE ACTIVITY FEED</h2>
        <Updates />
      </div>

      {/* Invite Friends Button with animation */}
      <div className="w-[90%] max-w-md mt-4 flex items-center justify-between bg-[#0052CC] rounded-lg p-2 border border-[#2181FF] shadow-glow animate-float delay-400">
        <button 
          onClick={handleInviteFriends}
          className="flex items-center text-white hover:text-[#fea750] transition-colors duration-300"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" viewBox="0 0 20 20" fill="currentColor">
            <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
          </svg>
          Invite friends
        </button>
        <span className="bg-gray-700 text-xs px-2 py-1 rounded-full">0/10</span>
      </div>
    </div>
  );
};

export default Home;
