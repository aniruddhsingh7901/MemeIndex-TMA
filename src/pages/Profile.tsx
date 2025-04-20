import React, { useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import profile1 from '../../public/profile1.jpg';
import profile2 from '../../public/profile2.jpg';
import WalletInterface from './WalletInterface'; // Import the new component

const Profile: React.FC = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const [profileInfo, _] = useState({
    voteBalance: 0,
    seasonWon: 3,
    income: 234,
  });
  const [showWalletPopup, setShowWalletPopup] = useState(false);
  const [walletOpened, setWalletOpened] = useState(false);  // Track if wallet is opened

  console.log(userFriendlyAddress, rawAddress);

  const handleConnectWallet = () => {
    setShowWalletPopup(true);
  };

  const closeWalletPopup = () => {
    setShowWalletPopup(false);
  };

  // Wallet options data
  const walletOptions = [
    { id: 'tonkeeper', name: 'Tonkeeper', color: '#0088CC', icon: '💎' },
    { id: 'mytonwallet', name: 'MyTonWallet', color: '#2C3FFF', icon: '🔵' },
    { id: 'tonhub', name: 'Tonhub', color: '#7000FF', icon: '💠' },
    { id: 'tonwallet', name: 'Smart Wallet', color: '#11A97D', icon: '💰' },
  ];

  return (
    <div className="blue-bg flex flex-col items-center justify-start min-h-screen w-full max-w-full mx-auto p-4 pb-24 bg-[#011442] relative overflow-hidden">
      <div className="max-w-md w-full">
        {/* Top section */}
        <div className="bg-[#0A1E5B] border border-[#2181FF] rounded-xl p-4 text-white flex flex-col items-center mb-4">
          <div className="text-sm opacity-70">VOTE BALANCE</div>
          <div className="joystix-text text-2xl font-bold text-white">{profileInfo.voteBalance}</div>
        </div>

        {/* Achievements */}
        <h2 className="karmatic-text text-white text-xl mb-2 text-center tracking-wider">
          ACHIEVEMENTS
        </h2>
        <div className="bg-[#0A1E5B] border border-[#2181FF] rounded-xl p-4 text-white mb-6">
          <div className="flex justify-between mb-2">
            <span className="font-semibold">Season won</span>
            <span>{profileInfo.seasonWon}</span>
          </div>
          <div className="flex justify-between">
            <span className="font-semibold">Income</span>
            <span>{profileInfo.income} $INDEX</span>
          </div>
        </div>

        {/* Conditional Rendering for Wallet Interaction */}
        {!walletOpened ? (
          <>
            {/* Wallet Image */}
            <div className="relative w-full max-w-md rounded-xl overflow-hidden mb-6">
              <img
                src={profile1}
                alt="Wallet"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white text-black rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold z-10">
                A
              </div>

              <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 text-center z-10">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm text-gray-800">
                    Connect your wallet and charge into battle!<br />
                    The arena is heating up, and only the strongest will rise.
                  </p>
                </div>

                <button
                  className="w-full mt-3 bg-gradient-to-b from-[#D97410] to-[#be6812] hover:brightness-110 text-white py-2 rounded-md text-sm font-bold z-10"
                  onClick={handleConnectWallet}
                >
                  Connect wallet
                </button>
              </div>
            </div>

            {/* Arena Card */}
            <div className="relative">
              <img
                src={profile2}
                alt="Arena Card"
                className="rounded-xl w-full h-auto object-cover"
              />
              <div className="absolute top-4 right-4 bg-gray-700 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">
                A
              </div>
              <div className="absolute bottom-4 left-0 right-0 px-4">
                <div className="text-center text-white mb-2">
                  <div className="text-md font-semibold">ENTER ARENA</div>
                  <div className="text-xs">
                    Own a token? Register now and claim your place in the elite MI500 index. Just a few simple steps to enter the battle!
                  </div>
                </div>
                <button className="w-full bg-gradient-to-b from-[#D97410] to-[#be6812] text-white py-2 rounded-lg text-sm font-bold">
                  Enlist Your Token
                </button>
              </div>
            </div>
          </>
        ) : (
          // Replace the "Wallet Connected!" text with the new WalletInterface component
          <WalletInterface />
        )}
      </div>

      {showWalletPopup && (
        <div className="fixed inset-0 z-50 flex justify-center items-end bg-black/50 backdrop-blur-sm">
          <div className="bg-[#0D0D0D] w-full max-w-md mx-auto rounded-t-2xl overflow-hidden shadow-xl border-t border-[#1E1E1E] relative animate-slide-up">
            <button 
              className="absolute top-3 right-3 text-white text-lg hover:text-gray-300"
              onClick={closeWalletPopup}
            >
              ✕
            </button>
            <div className="pt-6 pb-3 px-4 text-center">
              <h3 className="text-white text-lg font-semibold">Connect your wallet</h3>
              <p className="text-gray-400 text-xs mt-1">
                Open Wallet in Telegram or select your wallet to connect
              </p>
            </div>
            <div className="px-4 mb-4">
              <button
                className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                onClick={() => {
                  setWalletOpened(true); // Mark wallet as opened
                  setShowWalletPopup(false); // Hide the popup
                }}
              >
                <span className="mr-2 text-white text-xl">📱</span>
                <span className="text-white">Open Wallet in Telegram</span>
                <span className="ml-2 text-white">→</span>
              </button>
            </div>

            {/* Wallet Options */}
            <div className="grid grid-cols-4 gap-2 px-4 pb-6">
              {walletOptions.map((wallet) => (
                <div key={wallet.id} className="flex flex-col items-center">
                  <button 
                    className="w-14 h-14 rounded-xl flex items-center justify-center"
                    style={{ backgroundColor: wallet.color }}
                  >
                    <span className="text-2xl">{wallet.icon}</span>
                  </button>
                  <span className="text-white text-xs text-center mt-1">{wallet.name}</span>
                </div>
              ))}
              <div className="flex flex-col items-center">
                <button className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center">
                  <span className="text-xl text-white">+</span>
                </button>
                <span className="text-white text-xs mt-1">More</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;