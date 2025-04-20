import { useState } from 'react';

export default function WalletInterface() {
  const [selectedTab, setSelectedTab] = useState('TON');
  const [voteCount, setVoteCount] = useState(0);
  const [showBuyVotePopup, setShowBuyVotePopup] = useState(false);
  
  const truncatedAddress = "0xCa1e...e094";
  
  // Function to handle Buy Vote button click
  const handleBuyVoteClick = () => {
    setShowBuyVotePopup(true);
  };
  
  // Function to close the popup
  const handleClosePopup = () => {
    setShowBuyVotePopup(false);
  };
  
  // Function to handle disconnect
  const handleDisconnect = () => {
    handleClosePopup();
    // Add your disconnect logic here
  };
  
  // Function to connect new wallet
  const handleConnectWallet = () => {
    handleClosePopup();
    // Add your connect wallet logic here
  };
  
  return (
    <div className="w-full max-w-md bg-blue-500 rounded-xl p-4">
      {/* WALLET Header */}
      <div className="text-center mb-6">
        <h2 className="font-bold text-xl text-white">WALLET</h2>
      </div>
      
      {/* Address Dropdown */}
      <div className="mb-4">
        <div className="w-full bg-blue-600 rounded-lg p-3 flex justify-between items-center cursor-pointer text-white">
          <span className="font-medium">{truncatedAddress}</span>
          <span>▼</span>
        </div>
      </div>
      
      {/* Tabs */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <button
          className={`py-3 px-4 rounded-lg font-medium ${
            selectedTab === 'MIDAO' 
              ? 'bg-white text-blue-600' 
              : 'bg-blue-400 text-white'
          }`}
          onClick={() => setSelectedTab('MIDAO')}
        >
          MIDAO
        </button>
        <button
          className={`py-3 px-4 rounded-lg font-medium ${
            selectedTab === 'tgBTC' 
              ? 'bg-white text-blue-600' 
              : 'bg-blue-400 text-white'
          }`}
          onClick={() => setSelectedTab('tgBTC')}
        >
          tgBTC
        </button>
        <button
          className={`py-3 px-4 rounded-lg font-medium ${
            selectedTab === 'TON' 
              ? 'bg-white text-blue-600' 
              : 'bg-blue-400 text-white'
          }`}
          onClick={() => setSelectedTab('TON')}
        >
          TON
        </button>
      </div>
      
      {/* Set Vote Count Button */}
      <button className="w-full bg-blue-400 text-white rounded-lg py-4 text-center font-medium mb-6">
        Set Your Vote Count
      </button>
      
      {/* Down Arrow */}
      <div className="flex justify-center mb-6">
        <div className="w-8 h-8 bg-blue-300 rounded-full flex items-center justify-center">
          <span className="text-blue-700">▼</span>
        </div>
      </div>
      
      {/* Vote Display */}
      <div className="w-full bg-blue-400 rounded-lg py-4 text-center mb-6 text-white">
        <span className="font-bold">{voteCount}</span> vote
      </div>
      
      {/* Buy Vote Button */}
      <button 
        className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-4 text-center font-medium"
        onClick={handleBuyVoteClick}
      >
        Buy vote
      </button>
      
      {/* Buy Vote Popup */}
      {showBuyVotePopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
          <div className="bg-blue-500 rounded-xl w-full max-w-xs overflow-hidden">
            {/* Wallet selection list */}
            <div className="p-4">
              {/* First wallet option */}
              <div className="bg-blue-400 rounded-lg mb-2 flex items-center justify-between p-3 cursor-pointer">
                <span className="text-white">0xCa1e...e094</span>
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-500"></div>
                </div>
              </div>
              
              {/* Second wallet option */}
              <div className="bg-blue-400 rounded-lg mb-4 flex items-center justify-between p-3 cursor-pointer">
                <span className="text-white">0xCa1e...e094</span>
                <div className="h-6 w-6 rounded-full bg-white flex items-center justify-center">
                  <div className="h-4 w-4 rounded-full bg-blue-400"></div>
                </div>
              </div>
              
              {/* Connect wallet button */}
              <button 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white rounded-lg py-3 text-center font-medium mb-3"
                onClick={handleConnectWallet}
              >
                Connect new wallet
              </button>
              
              {/* Disconnect button */}
              <div className="text-center">
                <button 
                  className="text-red-500 font-medium"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}