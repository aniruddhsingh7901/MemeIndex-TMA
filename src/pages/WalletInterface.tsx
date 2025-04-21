import { useState } from 'react';

export default function WalletInterface() {
  const [voteCount, setVoteCount] = useState(0);
  const [showBuyVotePopup, setShowBuyVotePopup] = useState(false);
  
  const truncatedAddress = "0xCa1e...e094";
  
  // Sample values for each token/coin
  const tokenValues = {
    MIDAO: "10.5",
    tgBTC: "0.025",
    TON: "125.75"
  };
  
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
      
      {/* Token Values - Always visible */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        <div className="bg-blue-400 py-3 px-4 rounded-lg">
          <div className="text-white font-medium text-center">MIDAO</div>
        </div>
        <div className="bg-blue-400 py-3 px-4 rounded-lg">
          <div className="text-white font-medium text-center">tgBTC</div>
          {/* <div className="text-white text-center font-bold">{tokenValues.tgBTC}</div> */}
        </div>
        <div className="bg-blue-400 py-3 px-4 rounded-lg">
          <div className="text-white font-medium text-center">TON</div>
          {/* <div className="text-white text-center font-bold">{tokenValues.TON}</div> */}
        </div>
      </div>
      
       {/* Set Vote Count Button - Blue with white text */}
       <button className="w-full bg-blue-400 text-white rounded-lg py-4 text-center font-medium mb-6 bg-gradient-to-t from-[#0140FF] via-[#0059FF] to-[#0065FF]">
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
      {/* <button 
        className="w-full  text-white rounded-lg py-4 text-center font-medium"
        onClick={handleBuyVoteClick}
      >
        Buy vote
      </button> */}
      <button className="w-full bg-orange-500 py-4 hover:bg-orange-600 text-white py-2 rounded-lg text-sm font-bold bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917]" onClick={handleBuyVoteClick}>
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
              
              <button className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-xs hover:from-[#F78F27] hover:via-[#a6410f]  hover:to-[#7d2603] font-bold" onClick={handleConnectWallet}>
              Connect new wallet
          </button>
              
              {/* Disconnect button */}
              
                <button 
                  className="w-full text-red-500 font-medium  rounded px-3 py-3 text-center mt-2 font-bold text-xs"
                  onClick={handleDisconnect}
                >
                  Disconnect
                </button>
             
            </div>
          </div>
        </div>
      )}
    </div>
  );
}