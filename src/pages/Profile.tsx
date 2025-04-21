// import React, { useState } from 'react';
// import { useTonAddress } from '@tonconnect/ui-react';
// import profile1 from '../../public/profile1.jpg';
// import profile2 from '../../public/profile2.jpg';
// import WalletInterface from './WalletInterface';

// const Profile: React.FC = () => {
//   const userFriendlyAddress = useTonAddress();
//   const rawAddress = useTonAddress(false);
//   const [profileInfo, setProfileInfo] = useState({
//     voteBalance: 0,
//     seasonWon: 3,
//     income: 234,
//   });
//   const walletOptions = [
//     { id: 'tonkeeper', name: 'Tonkeeper', color: '#0088CC', icon: '💎' },
//     { id: 'mytonwallet', name: 'MyTonWallet', color: '#2C3FFF', icon: '🔵' },
//     { id: 'tonhub', name: 'Tonhub', color: '#7000FF', icon: '💠' },
//     { id: 'tonwallet', name: 'Smart Wallet', color: '#11A97D', icon: '💰' },
//   ];


//   const [showWalletPopup, setShowWalletPopup] = useState(false);
//   const [walletOpened, setWalletOpened] = useState(false);
//   const [tokenEnlistFormVisible, setTokenEnlistFormVisible] = useState(false);
//   const [tokenEnlisted, setTokenEnlisted] = useState(false);
//   const [enlistError, setEnlistError] = useState(false);

//   const [formData, setFormData] = useState({
//     address: '',
//     description: '',
//     twitter: '',
//     telegram: '',
//     website: '',
//   });

//   const [loading, setLoading] = useState(false);
//   const isFormComplete = formData.address.trim() && formData.description.trim();

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleConnectWallet = () => {
//     setShowWalletPopup(true);
//   };

//   const closeWalletPopup = () => {
//     setShowWalletPopup(false);
//   };

//   const handleEnlistToken = () => {
//     setTokenEnlistFormVisible(true);
//   };

//   const handleSubmit = () => {
//     if (!isFormComplete || loading) return;
//     setLoading(true);

//     const { address, description } = formData;

//     // Dummy success check
//     const isValidData =
//       address.trim() === '123' &&
//       description.trim().toLowerCase().includes('123');

//     setTimeout(() => {
//       setLoading(false);

//       if (isValidData) {
//         setTokenEnlisted(true);
//         setEnlistError(false);
//       } else {
//         setTokenEnlisted(false);
//         setEnlistError(true);
//       }
//     }, 2000);
//   };

//   return (
//     <div className="blue-bg flex flex-col items-center justify-start min-h-screen w-full max-w-full mx-auto p-4 pb-24 bg-[#011442] relative overflow-hidden">
//       <div className="max-w-md w-full">

//         {/* Banner for error */}
//         {enlistError && (
//           <div className="bg-[#ffffff22] border border-white/30 text-white p-3 rounded-lg text-sm flex items-center gap-2 mb-4">
//             <span>⚠️</span>
//             <span>Oops! Something went wrong. Please try again.</span>
//           </div>
//         )}

//         {/* Token successfully enlisted message */}
//         {tokenEnlisted && (
//           <div className="bg-[#ffffff22] border border-white/30 text-white p-3 rounded-lg text-sm text-center mb-4">
//             ✅ Token successfully enlisted!
//           </div>
//         )}

//         <div className="bg-[#0A1E5B] border border-[#2181FF] rounded-xl p-4 text-white flex flex-col items-center mb-4">
//           <div className="text-sm opacity-70">VOTE BALANCE</div>
//           <div className="joystix-text text-2xl font-bold text-white">{profileInfo.voteBalance}</div>
//         </div>

//         <h2 className="karmatic-text text-white text-xl mb-2 text-center tracking-wider">ACHIEVEMENTS</h2>
//         <div className="bg-[#0A1E5B] border border-[#2181FF] rounded-xl p-4 text-white mb-6">
//           <div className="flex justify-between mb-2">
//             <span className="font-semibold">Season won</span>
//             <span>{profileInfo.seasonWon}</span>
//           </div>
//           <div className="flex justify-between">
//             <span className="font-semibold">Income</span>
//             <span>{profileInfo.income} $INDEX</span>
//           </div>
//         </div>

//         {!walletOpened ? (
//           <>
//             <div className="relative w-full max-w-md rounded-xl overflow-hidden mb-6">
//               <img src={profile1} alt="Wallet" className="w-full h-auto object-cover" />
//               <div className="absolute top-4 right-4 w-8 h-8 bg-white text-black rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold z-10">A</div>
//               <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 text-center z-10">
//                 <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
//                   <p className="text-sm text-gray-800">
//                     Connect your wallet and charge into battle!<br />
//                     The arena is heating up, and only the strongest will rise.
//                   </p>
//                 </div>
                
//                 <button
//                   className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-xs hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] font-bold"
//                   onClick={handleConnectWallet}
//                 >
//                   Connect wallet
//                 </button>
//               </div>
//             </div>

//             {showWalletPopup && (
//           <div className="bg-[#0D0D0D] w-full mx-auto rounded-2xl overflow-hidden shadow-xl border border-[#1E1E1E] relative mt-6 animate-slide-up">
//             <button
//               className="absolute top-3 right-3 text-white text-lg hover:text-gray-300"
//               onClick={closeWalletPopup}
//             >
//               ✕
//             </button>

//             <div className="pt-6 pb-3 px-4 text-center">
//               <h3 className="text-white text-lg font-semibold">Connect your wallet</h3>
//               <p className="text-gray-400 text-xs mt-1">
//                 Open Wallet in Telegram or select your wallet to connect
//               </p>
//             </div>

//             <div className="px-4 mb-4">
//               <button
//                 className="w-full bg-[#2AABEE] hover:bg-[#229ED9] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
//               >
//                 <span className="mr-2 text-white text-xl">📱</span>
//                 <span className="text-white">Open Wallet in Telegram</span>
//                 <span className="ml-2 text-white">→</span>
//               </button>
//             </div>

//             <div className="grid grid-cols-4 gap-2 px-4 pb-6">
//               {walletOptions.map((wallet) => (
//                 <div key={wallet.id} className="flex flex-col items-center">
//                   <button
//                     className="w-14 h-14 rounded-xl flex items-center justify-center"
//                     style={{ backgroundColor: wallet.color }}
//                   >
//                     <span className="text-2xl">{wallet.icon}</span>
//                   </button>
//                   <span className="text-white text-xs text-center mt-1">{wallet.name}</span>
//                 </div>
//               ))}
//               <div className="flex flex-col items-center">
//                 <button className="w-14 h-14 bg-gray-700 rounded-xl flex items-center justify-center">
//                   <span className="text-xl text-white">+</span>
//                 </button>
//                 <span className="text-white text-xs mt-1">More</span>
//               </div>
//             </div>
//           </div>
//         )}


//             {tokenEnlisted ? (
//               <div className="bg-[#1530af] rounded-xl text-white p-4 text-center">
//                 <h2 className="text-xl font-bold karmatic-text mb-2">YOUR TOKEN</h2>
//                 <div className="text-2xl font-bold mb-1">🐶 $FLOKI</div>
//                 <div className="bg-[#0e1c5d] rounded-md py-1 px-2 text-sm inline-block mb-3">Current season</div>

//                 <div className="text-left space-y-2 mb-4">
//                   <div className="flex justify-between"><span>Place</span><span>#3</span></div>
//                   <div className="flex justify-between"><span>Score</span><span>342</span></div>
//                   <div className="flex justify-between"><span>Followers</span><span>23 943</span></div>
//                   <div className="flex justify-between"><span>Total vote</span><span>430 248</span></div>
//                 </div>

//                 <div>
//                   <div className="bg-[#0e1c5d] rounded-md py-1 px-2 text-sm inline-block mb-2">Achievements</div>
//                   <div className="flex justify-center space-x-2">
//                     <div className="text-center">
//                       <img src="/season1.png" alt="Season 1" className="w-10 h-10 mx-auto" />
//                       <div className="text-xs">Season 1 Champion</div>
//                     </div>
//                     <div className="text-center">
//                       <img src="/season2.png" alt="Season 2" className="w-10 h-10 mx-auto" />
//                       <div className="text-xs">Season 2 $DOGE wins</div>
//                     </div>
//                     <div className="text-center">
//                       <img src="/season3.png" alt="Season 3" className="w-10 h-10 mx-auto" />
//                       <div className="text-xs">Season 3 $WIF wins</div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : tokenEnlistFormVisible ? (
//               <div className="bg-[#26207C] border border-[#2181FF] rounded-xl text-white">
//                 <img src={profile2} alt="Arena Card" className="rounded-xl w-full h-auto object-cover" />
//                 <div className='p-4'>
//                   <h2 className="text-xl font-bold text-center mb-2 karmatic-text">ENTER ARENA</h2>
//                   <p className="text-xs text-center mb-4">
//                     Own a token? Register now and claim your place in the elite MI500 index.
//                   </p>
//                   <div className="space-y-4">
//                     <div>
//                       <label className="text-xs text-blue-300 mb-1 block">Address*</label>
//                       <input
//                         type="text"
//                         name="address"
//                         value={formData.address}
//                         onChange={handleInputChange}
//                         className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
//                         placeholder="Eqp: 0xDafe5c23E3eEB1CB5d1557FBB3"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs text-blue-300 mb-1 block">Description*</label>
//                       <textarea
//                         name="description"
//                         value={formData.description}
//                         onChange={handleInputChange}
//                         className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full min-h-24"
//                         placeholder="Share your token's story!"
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs text-blue-300 mb-1 block">Twitter (X)</label>
//                       <input
//                         type="text"
//                         name="twitter"
//                         value={formData.twitter}
//                         onChange={handleInputChange}
//                         className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
//                         placeholder="twitter.com/..."
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs text-blue-300 mb-1 block">Telegram</label>
//                       <input
//                         type="text"
//                         name="telegram"
//                         value={formData.telegram}
//                         onChange={handleInputChange}
//                         className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
//                         placeholder="t.me/..."
//                       />
//                     </div>
//                     <div>
//                       <label className="text-xs text-blue-300 mb-1 block">Website</label>
//                       <input
//                         type="text"
//                         name="website"
//                         value={formData.website}
//                         onChange={handleInputChange}
//                         className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
//                         placeholder="www.example.com"
//                       />
//                     </div>
//                     <div
//                       className={`w-full rounded-lg py-4 text-center mb-6 cursor-pointer transition-all font-bold text-white ${
//                         loading
//                           ? 'bg-transparent border border-white/40 text-white opacity-70 cursor-wait'
//                           : isFormComplete
//                           ? 'bg-orange-500 hover:bg-orange-600'
//                           : 'bg-blue-400'
//                       }`}
//                       onClick={handleSubmit}
//                     >
//                       {loading ? 'Loading...' : 'Connect wallet'}
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             ) : (
//               <div className="relative">
//                 <img src={profile2} alt="Arena Card" className="rounded-xl w-full h-auto object-cover" />
//                 <div className="absolute top-4 right-4 bg-gray-700 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">A</div>
//                 <div className="absolute bottom-4 left-0 right-0 px-4">
//                   <div className="text-center text-white mb-2">
//                     <div className="text-md font-semibold">ENTER ARENA</div>
//                     <div className="text-xs">Own a token? Register now and claim your place in the elite MI500 index.</div>
//                   </div>
//                   <button
//                     className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-xs hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] font-bold"
//                     onClick={handleEnlistToken}
//                   >
//                     Enlist Your Token
//                   </button>
//                 </div>
//               </div>
//             )}
//           </>
//         ) : (
//           <WalletInterface />
//         )}
//       </div>
//     </div>
//   );
// };

// export default Profile;





import React, { useState } from 'react';
import { useTonAddress } from '@tonconnect/ui-react';
import profile1 from '../../public/profile1.jpg';
import profile2 from '../../public/profile2.jpg';
import WalletInterface from './WalletInterface';

const Profile: React.FC = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);

  const [profileInfo, setProfileInfo] = useState({
    voteBalance: 0,
    seasonWon: 3,
    income: 234,
  });

  const walletOptions = [
    { id: 'tonkeeper', name: 'Tonkeeper', color: '#0088CC', icon: '💎' },
    { id: 'mytonwallet', name: 'MyTonWallet', color: '#2C3FFF', icon: '🔵' },
    { id: 'tonhub', name: 'Tonhub', color: '#7000FF', icon: '💠' },
    { id: 'tonwallet', name: 'Smart Wallet', color: '#11A97D', icon: '💰' },
  ];

  const [showWalletPopup, setShowWalletPopup] = useState(false);
  const [walletOpened, setWalletOpened] = useState(false);

  const [tokenEnlistFormVisible, setTokenEnlistFormVisible] = useState(false);
  const [tokenEnlisted, setTokenEnlisted] = useState(false);
  const [enlistError, setEnlistError] = useState(false);

  const [formData, setFormData] = useState({
    address: '',
    description: '',
    twitter: '',
    telegram: '',
    website: '',
  });

  const [loading, setLoading] = useState(false);
  const isFormComplete = formData.address.trim() && formData.description.trim();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConnectWallet = () => {
    setShowWalletPopup(true);
  };

  const closeWalletPopup = () => {
    setShowWalletPopup(false);
  };

  const openTelegramWallet = () => {
    setWalletOpened(true);
    setShowWalletPopup(false);
  };

  const handleEnlistToken = () => {
    setTokenEnlistFormVisible(true);
  };

  const handleSubmit = () => {
    if (!isFormComplete || loading) return;
    setLoading(true);

    const { address, description } = formData;
    const isValidData =
      address.trim() === '123' &&
      description.trim().toLowerCase().includes('123');

    setTimeout(() => {
      setLoading(false);
      if (isValidData) {
        setTokenEnlisted(true);
        setEnlistError(false);
      } else {
        setTokenEnlisted(false);
        setEnlistError(true);
      }
    }, 2000);
  };

  return (
    <div className="blue-bg flex flex-col items-center justify-start min-h-screen w-full max-w-full mx-auto p-4 pb-24 bg-[#011442] relative overflow-hidden">
      <div className="max-w-md w-full">


        {tokenEnlisted && (
          <div className="bg-[#ffffff22] border border-white/30 text-white p-3 rounded-lg text-sm text-center mb-4">
            ✅ Token successfully enlisted!
          </div>
        )}

        {/* Vote Balance */}
        <div className="bg-[#0A1E5B] border border-[#2181FF] rounded-xl p-4 text-white flex flex-col items-center mb-4">
          <div className="text-sm opacity-70">VOTE BALANCE</div>
          <div className="joystix-text text-2xl font-bold text-white">{profileInfo.voteBalance}</div>
        </div>

        {/* Achievements */}
        <h2 className="karmatic-text text-white text-xl mb-2 text-center tracking-wider">ACHIEVEMENTS</h2>
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

        {!walletOpened ? (
          <>
            {/* Wallet Connect UI */}
            <div className="relative w-full max-w-md rounded-xl overflow-hidden mb-6">
              <img src={profile1} alt="Wallet" className="w-full h-auto object-cover" />
              <div className="absolute top-4 right-4 w-8 h-8 bg-white text-black rounded-full border border-gray-200 flex items-center justify-center text-sm font-bold z-10">A</div>
              <div className="absolute bottom-0 left-0 right-0 px-4 pb-5 text-center z-10">
                <div className="bg-white/90 backdrop-blur-sm px-4 py-3 rounded-lg">
                  <p className="text-sm text-gray-800">
                    Connect your wallet and charge into battle!<br />
                    The arena is heating up, and only the strongest will rise.
                  </p>
                </div>
                <button
                  className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-xs hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] font-bold"
                  onClick={handleConnectWallet}
                >
                  Connect wallet
                </button>
              </div>
            </div>


             {/* Error / Success Notifications */}
        {enlistError && (
          <div className="bg-[#ffffff22] border border-white/30 text-white p-3 rounded-lg text-sm flex items-center gap-2 mb-4">
            <span>⚠️</span>
            <span>Oops! Something went wrong. Please try again.</span>
          </div>
        )}
            {/* Wallet Popup */}
            {showWalletPopup && (
              <div className="fixed bottom-0 left-0 right-0 z-50 bg-[#0D0D0D] rounded-t-2xl border-t border-[#1E1E1E] animate-slide-up shadow-2xl max-h-[90vh] overflow-auto">
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

                <div className="px-4 mb-4 ">
                  <button
                    onClick={openTelegramWallet}
                    className="w-full bg-blue-400 bg-[#2AABEE] hover:bg-[#229ED9] text-white font-semibold py-3 px-4 rounded-lg flex items-center justify-center transition-colors duration-200"
                  >

                    <span className="mr-2 text-white text-xl">📱</span>
                    <span className="text-black">Open Wallet in Telegram</span>
                    <span className="ml-2 text-white">→</span>
                  </button>

                  
                </div>

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
            )}

{tokenEnlisted ? (
              <div className="bg-[#1530af] rounded-xl text-white p-4 text-center">
                <h2 className="text-xl font-bold karmatic-text mb-2">YOUR TOKEN</h2>
                <div className="text-2xl font-bold mb-1">🐶 $FLOKI</div>
                <div className="bg-[#0e1c5d] rounded-md py-1 px-2 text-sm inline-block mb-3">Current season</div>

                <div className="text-left space-y-2 mb-4">
                  <div className="flex justify-between"><span>Place</span><span>#3</span></div>
                  <div className="flex justify-between"><span>Score</span><span>342</span></div>
                  <div className="flex justify-between"><span>Followers</span><span>23 943</span></div>
                  <div className="flex justify-between"><span>Total vote</span><span>430 248</span></div>
                </div>

                <div>
                  <div className="bg-[#0e1c5d] rounded-md py-1 px-2 text-sm inline-block mb-2">Achievements</div>
                  <div className="flex justify-center space-x-2">
                    <div className="text-center">
                      <img src="/season1.png" alt="Season 1" className="w-10 h-10 mx-auto" />
                      <div className="text-xs">Season 1 Champion</div>
                    </div>
                    <div className="text-center">
                      <img src="/season2.png" alt="Season 2" className="w-10 h-10 mx-auto" />
                      <div className="text-xs">Season 2 $DOGE wins</div>
                    </div>
                    <div className="text-center">
                      <img src="/season3.png" alt="Season 3" className="w-10 h-10 mx-auto" />
                      <div className="text-xs">Season 3 $WIF wins</div>
                    </div>
                  </div>
                </div>
              </div>
            ) : tokenEnlistFormVisible ? (
              <div className="bg-[#26207C] border border-[#2181FF] rounded-xl text-white">
                <img src={profile2} alt="Arena Card" className="rounded-xl w-full h-auto object-cover" />
                <div className='p-4'>
                  <h2 className="text-xl font-bold text-center mb-2 karmatic-text">ENTER ARENA</h2>
                  <p className="text-xs text-center mb-4">
                    Own a token? Register now and claim your place in the elite MI500 index.
                  </p>
                  <div className="space-y-4">
                    <div>
                      <label className="text-xs text-blue-300 mb-1 block">Address*</label>
                      <input
                        type="text"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
                        placeholder="Eqp: 0xDafe5c23E3eEB1CB5d1557FBB3"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-blue-300 mb-1 block">Description*</label>
                      <textarea
                        name="description"
                        value={formData.description}
                        onChange={handleInputChange}
                        className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full min-h-24"
                        placeholder="Share your token's story!"
                      />
                    </div>
                    <div>
                      <label className="text-xs text-blue-300 mb-1 block">Twitter (X)</label>
                      <input
                        type="text"
                        name="twitter"
                        value={formData.twitter}
                        onChange={handleInputChange}
                        className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
                        placeholder="twitter.com/..."
                      />
                    </div>
                    <div>
                      <label className="text-xs text-blue-300 mb-1 block">Telegram</label>
                      <input
                        type="text"
                        name="telegram"
                        value={formData.telegram}
                        onChange={handleInputChange}
                        className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
                        placeholder="t.me/..."
                      />
                    </div>
                    <div>
                      <label className="text-xs text-blue-300 mb-1 block">Website</label>
                      <input
                        type="text"
                        name="website"
                        value={formData.website}
                        onChange={handleInputChange}
                        className="bg-white text-gray-800 rounded-lg p-3 text-sm w-full"
                        placeholder="www.example.com"
                      />
                    </div>
                    <div
                      className={`w-full rounded-lg py-4 text-center mb-6 cursor-pointer transition-all font-bold text-white ${
                        loading
                          ? 'bg-transparent border border-white/40 text-white opacity-70 cursor-wait'
                          : isFormComplete
                          ? 'bg-orange-500 hover:bg-orange-600'
                          : 'bg-blue-400'
                      }`}
                      onClick={handleSubmit}
                    >
                      {loading ? 'Loading...' : 'Connect wallet'}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="relative">
                <img src={profile2} alt="Arena Card" className="rounded-xl w-full h-auto object-cover" />
                <div className="absolute top-4 right-4 bg-gray-700 text-white w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs border-2 border-white">A</div>
                <div className="absolute bottom-4 left-0 right-0 px-4">
                  <div className="text-center text-white mb-2">
                    <div className="text-md font-semibold">ENTER ARENA</div>
                    <div className="text-xs">Own a token? Register now and claim your place in the elite MI500 index.</div>
                  </div>
                  <button
                    className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-xs hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] font-bold"
                    onClick={handleEnlistToken}
                  >
                    Enlist Your Token
                  </button>
                </div>
              </div>
            )}
          </>
        ) : (
          <WalletInterface />
        )}
      </div>
    </div>
  );
};

export default Profile;
