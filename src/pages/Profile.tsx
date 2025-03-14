import { TonConnectButton, useTonAddress } from '@tonconnect/ui-react';
import React, { useState } from 'react';

interface ProfileInfo {
 voteBalance: number;
 seasonWon: number;
 income: number;
}

const Profile: React.FC = () => {
  const userFriendlyAddress = useTonAddress();
  const rawAddress = useTonAddress(false);
  const [profileInfo, _] = useState<ProfileInfo>({ voteBalance: 0, seasonWon: 3, income: 234 });
  console.log(userFriendlyAddress, rawAddress);
  return (

   <div className="blue-bg min-h-screen w-full max-w-md mx-auto p-4 pb-16">

      <div className="text-center flex flex-col items-center mb-4 bg-transparent border border-[#2181FF] text-white rounded-lg p-4 flex justify-between items-center transition-all duration-300 ease-in-out">
       <div className="text-center">
         <div className="text-[0.8rem]">Vote balance</div>
         <div className="joystix-text text-white text-2xl font-bold">{profileInfo.voteBalance}</div>
       </div>
      </div>

      <h2 className="karmatic-text text-white text-2xl mb-4">ACHIEVMENTS</h2>

      <div className="text-center flex flex-col items-center mb-4 bg-transparent border border-[#2181FF] text-white rounded-lg p-4 flex justify-between items-center transition-all duration-300 ease-in-out">

        <div className="flex flex-col gap-2 mb-4 w-[100%] ">
         
         <div className="text-center flex justify-between">
           <div className="text-md font-bold">Season won</div>
           <div className="text-sm ">{profileInfo.seasonWon}</div>
         </div>

         <div className="text-center flex justify-between">
           <div className="text-md font-bold">Income</div>
           <div className="text-sm ">{profileInfo.income} $INDEX</div>
         </div>

       </div>
      </div>

      <h2 className="karmatic-text text-white text-center text-2xl mb-4">WALLET</h2>
        
      <div className="mt-4 text-center w-full flex justify-center items-center">
        {/* <button className="w-full bg-linear-to-b from-[#D97410] to-[#be6812] hover:bg-[#ffbf80] text-white py-2 rounded-lg text-lg font-bold">
          Connect wallet
        </button> */}
           <TonConnectButton />
      </div>

    </div>
  );
};

export default Profile;