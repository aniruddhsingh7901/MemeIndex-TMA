import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import React, { useState, useEffect, useRef } from 'react';

interface ProfileInfo {
  voteBalance: number;
  seasonWon: number;
  income: number;
}

interface Achievement {
  id: number;
  name: string;
  description: string;
  icon: string;
  unlocked: boolean;
}

const Profile: React.FC = () => {
  const userFriendlyAddress = useTonAddress();
  // const rawAddress = useTonAddress(false); // Commented out as it's not used
  const [profileInfo] = useState<ProfileInfo>({ 
    voteBalance: 4234214, 
    seasonWon: 3, 
    income: 234 
  });
  
  const [achievements] = useState<Achievement[]>([
    { id: 1, name: "Season Winner", description: "Win a season", icon: "👑", unlocked: true },
    { id: 2, name: "Early Adopter", description: "Join during Season 1", icon: "🚀", unlocked: true },
    { id: 3, name: "Whale", description: "Vote with 100+ tgBTC", icon: "🐋", unlocked: false },
    { id: 4, name: "Diamond Hands", description: "Hold votes for 30 days", icon: "💎", unlocked: true },
    { id: 5, name: "Influencer", description: "Invite 10 friends", icon: "🌟", unlocked: false },
  ]);
  
  const [showAchievementDetails, setShowAchievementDetails] = useState<number | null>(null);
  const [animatedBalance, setAnimatedBalance] = useState(0);
  
  // Refs for animation
  const balanceRef = useRef<HTMLDivElement>(null);
  const achievementsRef = useRef<HTMLDivElement>(null);
  const walletRef = useRef<HTMLDivElement>(null);
  
  // Animate vote balance counting up
  useEffect(() => {
    const duration = 2000; // 2 seconds
    const steps = 50;
    const stepDuration = duration / steps;
    const increment = profileInfo.voteBalance / steps;
    let current = 0;
    let step = 0;
    
    const interval = setInterval(() => {
      step++;
      current += increment;
      setAnimatedBalance(Math.floor(current));
      
      if (step >= steps) {
        clearInterval(interval);
        setAnimatedBalance(profileInfo.voteBalance);
      }
    }, stepDuration);
    
    return () => clearInterval(interval);
  }, [profileInfo.voteBalance]);
  
  // Animate sections on mount
  useEffect(() => {
    const elements = [
      { ref: balanceRef, delay: 100, className: 'animate-slide-in-right' },
      { ref: achievementsRef, delay: 300, className: 'animate-slide-in-left' },
      { ref: walletRef, delay: 500, className: 'animate-expand' }
    ];
    
    elements.forEach(({ ref, delay, className }) => {
      setTimeout(() => {
        if (ref.current) {
          ref.current.classList.add(className);
          ref.current.style.opacity = '1';
        }
      }, delay);
    });
  }, []);
  
  // Random achievement animation
  useEffect(() => {
    const interval = setInterval(() => {
      const randomIndex = Math.floor(Math.random() * achievements.length);
      const achievementElements = document.querySelectorAll('.achievement-item');
      
      if (achievementElements[randomIndex]) {
        achievementElements[randomIndex].classList.add('animate-pulse-slow');
        setTimeout(() => {
          achievementElements[randomIndex].classList.remove('animate-pulse-slow');
        }, 2000);
      }
    }, 5000);
    
    return () => clearInterval(interval);
  }, [achievements.length]);
  
  return (
    <div className="blue-bg flex flex-col items-center justify-center min-h-screen w-full max-w-full mx-auto p-4 pb-16" 
         style={{ 
           backgroundImage: "url('./home1.jpg')", 
           backgroundSize: "cover", 
           backgroundPosition: "center",
           backgroundBlendMode: "overlay",
           backgroundColor: "rgba(0, 111, 255, 0.85)"
         }}>
      <div className='max-w-md w-full'>
        {/* Vote Balance Card */}
        <div 
          ref={balanceRef}
          className="opacity-0 text-center flex flex-col items-center mb-6 bg-[#0052CC] border border-[#2181FF] text-white rounded-xl p-6 shadow-glow-intense transition-all duration-500"
        >
          <div className="text-center">
            <div className="text-[0.8rem] mb-2 joystix-text animate-glow">VOTE BALANCE</div>
            <div className="karmatic-text text-white text-4xl font-bold animate-number-change">
              {animatedBalance.toLocaleString()}
            </div>
          </div>
        </div>

        {/* Achievements Section */}
        <div 
          ref={achievementsRef}
          className="opacity-0 mb-6 transition-all duration-500"
        >
          <h2 className="karmatic-text text-white text-2xl mb-4 text-center animate-glow">ACHIEVEMENTS</h2>

          <div className="bg-[#0052CC] border border-[#2181FF] text-white rounded-xl p-4 shadow-glow transition-all duration-300 ease-in-out">
            <div className="flex flex-col gap-3 w-full">
              {achievements.map((achievement, index) => (
                <div 
                  key={achievement.id}
                  className={`achievement-item flex justify-between items-center p-3 rounded-lg transition-all duration-300 ${
                    achievement.unlocked 
                      ? 'bg-[#0066FF] border border-[#2181FF]' 
                      : 'bg-[#0040CC] opacity-70'
                  } ${showAchievementDetails === achievement.id ? 'shadow-glow-orange' : ''}`}
                  onClick={() => setShowAchievementDetails(
                    showAchievementDetails === achievement.id ? null : achievement.id
                  )}
                >
                  <div className="flex items-center">
                    <span className={`text-2xl mr-3 ${achievement.unlocked ? 'animate-float' : 'opacity-50'}`} style={{ animationDelay: `${index * 0.2}s` }}>
                      {achievement.icon}
                    </span>
                    <div>
                      <div className={`font-bold ${achievement.unlocked ? 'text-white' : 'text-gray-300'}`}>
                        {achievement.name}
                      </div>
                      {showAchievementDetails === achievement.id && (
                        <div className="text-xs mt-1 animate-fade-in">
                          {achievement.description}
                        </div>
                      )}
                    </div>
                  </div>
                  {achievement.unlocked ? (
                    <span className="text-green-400 animate-pulse-slow">✓</span>
                  ) : (
                    <span className="text-gray-400">🔒</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Wallet Section */}
        <div 
          ref={walletRef}
          className="opacity-0 transition-all duration-500"
        >
          <h2 className="karmatic-text text-white text-center text-2xl mb-4 animate-glow">WALLET</h2>
          
          {userFriendlyAddress ? (
            <div className="bg-[#0052CC] border border-[#2181FF] text-white rounded-xl p-4 shadow-glow mb-4">
              <div className="text-center mb-2 text-sm opacity-80">Connected Address</div>
              <div className="bg-[#0066FF] p-3 rounded-lg text-center text-sm font-mono break-all animate-pulse-slow">
                {userFriendlyAddress}
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <button className="bg-[#0066FF] hover:bg-[#0059FF] p-2 rounded-lg text-xs transition-all duration-300 animate-float" style={{ animationDelay: '0.1s' }}>
                  Copy
                </button>
                <button className="bg-[#0066FF] hover:bg-[#0059FF] p-2 rounded-lg text-xs transition-all duration-300 animate-float" style={{ animationDelay: '0.2s' }}>
                  Explorer
                </button>
                <button className="bg-[#0066FF] hover:bg-[#0059FF] p-2 rounded-lg text-xs transition-all duration-300 animate-float" style={{ animationDelay: '0.3s' }}>
                  Disconnect
                </button>
              </div>
            </div>
          ) : (
            <div className="mt-4 text-center w-full flex justify-center items-center">
              <div className="w-full animate-button-pulse shadow-glow-orange">
                <TonConnectButton />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
