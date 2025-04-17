import React, { useState, useEffect } from "react";
import { useTonAddress, useTonConnectUI } from "@tonconnect/ui-react";

const Home: React.FC = () => {
  // Get wallet address from TonConnect
  const userFriendlyAddress = useTonAddress();
  const [tonConnectUI] = useTonConnectUI();
  
  // State for countdown timer
  const [timeRemaining, setTimeRemaining] = useState({
    days: 23,
    hours: 12,
    minutes: 23,
    seconds: 23
  });
  
  // State for wallet connection issues
  const [hasWalletError, setHasWalletError] = useState(false);

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

  // Handle wallet disconnect
  const handleDisconnect = () => {
    tonConnectUI.disconnect();
    setHasWalletError(false);
  };

  // Handle invite friends
  const handleInviteFriends = () => {
    // Telegram Mini App API to share with friends
    if ((window as any).Telegram?.WebApp) {
      (window as any).Telegram.WebApp.openTelegramLink("https://t.me/share/url?url=https://memeindex.org&text=Join%20the%20MemeIndex%20Battle%20Arena!");
    }
  };

  // Handle about project
  const handleAboutProject = () => {
    // Open Telegram channel
    if ((window as any).Telegram?.WebApp) {
      (window as any).Telegram.WebApp.openTelegramLink("https://t.me/memeindex");
    }
  };

  // Format wallet address for display
  const formatWalletAddress = (address: string) => {
    if (!address) return "";
    return `${address.substring(0, 6)}...${address.substring(address.length - 4)}`;
  };

  return (
    <div className="min-h-screen flex flex-col items-center text-white overflow-hidden" 
         style={{ 
           backgroundImage: "url('./home3.jpg')", 
           backgroundSize: "cover", 
           backgroundPosition: "center",
           backgroundColor: "#006FFF"
         }}>
      {/* Status bar */}
      <div className="w-full flex justify-between items-center px-4 py-2">
        <div className="text-white font-bold">9:41</div>
        <div className="flex items-center">
          <div className="mr-1">
            <svg width="18" height="16" viewBox="0 0 18 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 6C1 4.93913 1.42143 3.92172 2.17157 3.17157C2.92172 2.42143 3.93913 2 5 2H13C14.0609 2 15.0783 2.42143 15.8284 3.17157C16.5786 3.92172 17 4.93913 17 6V10C17 11.0609 16.5786 12.0783 15.8284 12.8284C15.0783 13.5786 14.0609 14 13 14H5C3.93913 14 2.92172 13.5786 2.17157 12.8284C1.42143 12.0783 1 11.0609 1 10V6Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M6 6L9 9L12 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div className="mr-1">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8.00001 14.6667C11.6819 14.6667 14.6667 11.6819 14.6667 8.00001C14.6667 4.31811 11.6819 1.33334 8.00001 1.33334C4.31811 1.33334 1.33334 4.31811 1.33334 8.00001C1.33334 11.6819 4.31811 14.6667 8.00001 14.6667Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 4V8L10.6667 9.33333" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          <div>
            <svg width="24" height="12" viewBox="0 0 24 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect opacity="0.35" x="0.5" y="0.833344" width="21" height="10.3333" rx="2.16667" stroke="white"/>
              <path opacity="0.4" d="M23 4V8C23.8047 7.66122 24.328 6.87313 24.328 6C24.328 5.12687 23.8047 4.33878 23 4Z" fill="white"/>
              <rect x="2" y="2.33334" width="18" height="7.33333" rx="1.33333" fill="white"/>
            </svg>
          </div>
        </div>
      </div>

      {/* Logo and Season Banner */}
      <div className="flex flex-col items-center justify-center w-full mt-4 mb-6 animate-pixel-fade">
        <h1 className="karmatic-text text-4xl text-center text-white mb-2 animate-glow">MEMEINDEX</h1>
        <h2 className="joystix-text text-xl text-center text-white animate-pulse-slow">BATTLE ARENA</h2>
      </div>
      
      {/* Countdown Timer */}
      <div className="flex justify-center gap-3 w-[90%] max-w-md mb-auto">
        <div className="flex flex-col items-center bg-[#0052CC] p-3 rounded-xl w-20 shadow-glow animate-float">
          <span className="karmatic-text text-4xl animate-number-change">{timeRemaining.days}</span>
          <span className="text-xs">days</span>
        </div>
        <div className="flex flex-col items-center bg-[#0052CC] p-3 rounded-xl w-20 shadow-glow animate-float delay-100">
          <span className="karmatic-text text-4xl animate-number-change">{timeRemaining.hours}</span>
          <span className="text-xs">hours</span>
        </div>
        <div className="flex flex-col items-center bg-[#0052CC] p-3 rounded-xl w-20 shadow-glow animate-float delay-200">
          <span className="karmatic-text text-4xl animate-number-change">{timeRemaining.minutes}</span>
          <span className="text-xs">min</span>
        </div>
        <div className="flex flex-col items-center bg-[#0052CC] p-3 rounded-xl w-20 shadow-glow animate-float delay-300">
          <span className="karmatic-text text-4xl animate-number-change">{timeRemaining.seconds}</span>
          <span className="text-xs">sec</span>
        </div>
      </div>

      {/* Wallet Error Message */}
      {hasWalletError && (
        <div className="w-[90%] max-w-md mt-auto mb-4 bg-white rounded-xl p-6 text-center">
          <h2 className="joystix-text text-2xl text-[#0052CC] mb-2">LINK CORRECTLY</h2>
          <p className="text-[#0052CC] mb-4">
            If you connected the wrong wallet — no worries, hero. Just disconnect the current 
            one and link the right companion. But whatever you do, don't leave this field 
            empty... the battle is about to begin!
          </p>
          <button 
            onClick={handleDisconnect}
            className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white py-3 rounded-lg font-bold"
          >
            Disconnect
          </button>
        </div>
      )}

      {/* About Project Link */}
      {!hasWalletError && (
        <div className="w-[90%] max-w-md mt-auto mb-4 flex items-center justify-center">
          <button 
            onClick={handleAboutProject}
            className="flex items-center text-white"
          >
            <span className="mr-2">About project:</span>
            <svg className="mr-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22.2581 2.268L12.9131 20.0985C12.8138 20.2756 12.6716 20.4246 12.4992 20.5311C12.3267 20.6376 12.1296 20.6978 11.9279 20.7058C11.7262 20.7139 11.5248 20.6694 11.3441 20.5769C11.1635 20.4844 11.0096 20.3471 10.8961 20.1785L7.15405 14.047L1.90505 11.1855C1.73323 11.0842 1.58913 10.9407 1.48721 10.7693C1.38529 10.5979 1.32932 10.4043 1.32471 10.2059C1.3201 10.0075 1.36702 9.81115 1.46076 9.63476C1.5545 9.45837 1.69155 9.30728 1.85805 9.1975L19.7311 0.0645C19.8941 -0.0435 20.0831 -0.0214 20.2266 0.0975C20.3701 0.2165 20.4521 0.4055 20.4441 0.6015L20.4456 0.6L19.7326 8.2665L22.2581 2.268Z" fill="white"/>
            </svg>
            <span>@memeindex</span>
          </button>
        </div>
      )}

      {/* Connect Wallet or Wallet Address */}
      {!hasWalletError && (
        <div className="w-[90%] max-w-md mb-4">
          {!userFriendlyAddress ? (
            <button 
              className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white py-3 rounded-lg font-bold"
              onClick={() => tonConnectUI.openModal()}
            >
              Connect wallet
            </button>
          ) : (
            <button 
              className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white py-3 rounded-lg font-bold"
              onClick={() => setHasWalletError(true)}
            >
              {formatWalletAddress(userFriendlyAddress)}
            </button>
          )}
        </div>
      )}

      {/* Invite Friends Button */}
      {!hasWalletError && (
        <div className="w-[90%] max-w-md mb-4 flex">
          <button 
            onClick={handleInviteFriends}
            className="flex-1 bg-white text-[#0052CC] py-3 px-4 rounded-lg font-medium flex items-center justify-center mr-2"
          >
            <svg className="mr-2" width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M13.3333 17.5V15.8333C13.3333 14.9493 12.9821 14.1014 12.357 13.4763C11.7319 12.8512 10.884 12.5 9.99999 12.5H4.99999C4.11593 12.5 3.26809 12.8512 2.64297 13.4763C2.01785 14.1014 1.66666 14.9493 1.66666 15.8333V17.5" stroke="#0052CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7.50001 9.16667C9.34095 9.16667 10.8333 7.67428 10.8333 5.83333C10.8333 3.99238 9.34095 2.5 7.50001 2.5C5.65906 2.5 4.16667 3.99238 4.16667 5.83333C4.16667 7.67428 5.65906 9.16667 7.50001 9.16667Z" stroke="#0052CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M18.3333 17.5V15.8333C18.3328 15.0948 18.0866 14.3773 17.6345 13.7936C17.1824 13.2099 16.5528 12.793 15.8333 12.6083" stroke="#0052CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M13.3333 2.60834C14.0545 2.79192 14.6859 3.20892 15.1391 3.7936C15.5923 4.37827 15.8389 5.09736 15.8389 5.8375C15.8389 6.57765 15.5923 7.29674 15.1391 7.88141C14.6859 8.46609 14.0545 8.88309 13.3333 9.06667" stroke="#0052CC" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Invite friends
            <span className="ml-2 bg-[#0052CC] text-white text-xs px-2 py-1 rounded-full">0/10</span>
          </button>
          <button className="bg-white text-[#0052CC] py-3 px-4 rounded-lg">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M4 16V17C4 17.5304 4.21071 18.0391 4.58579 18.4142C4.96086 18.7893 5.46957 19 6 19H18C18.5304 19 19.0391 18.7893 19.4142 18.4142C19.7893 18.0391 20 17.5304 20 17V16M16 8L12 4M12 4L8 8M12 4V16" stroke="#0052CC" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      )}
    </div>
  );
};

export default Home;
