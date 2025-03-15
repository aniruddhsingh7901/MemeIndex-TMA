import { LuTrophy } from "react-icons/lu";
import { FaFacebookF } from "react-icons/fa";
import { PiTelegramLogoBold } from "react-icons/pi";
import { FaXTwitter } from "react-icons/fa6";
import Updates from "../Components/Updates";

const Community = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center max-w-md mx-auto h-auto blue-bg pb-16 ">
      {/* Navigation Header */}
      <div className="bg-[#006CFF] border border-[#187DFF] w-[90%] rounded-xl">
      <div className="flex justify-between items-center p-4">
        <div className="flex items-center justify-center text-white text-2xl bg-[#2181FF] px-2 border border-[#187DFF] rounded-md">
          <span className="text-2xl">←</span>
        </div>
        <div className="flex items-center justify-center text-white text-2xl bg-[#2181FF] p-2 border border-[#187DFF] rounded-md">
          <LuTrophy />
        </div>
      </div>

      {/* FLOKI Heading */}
      <div className="text-center flex flex-col items-center mb-4">
        <img src="/floki.jpg" alt="floki" width={80} height={70} ></img>
        <h2 className="joystix-text text-white text-2xl font-bold">
          $FLOKI
        </h2>
      </div>

      {/* Details Card */}
      <div className="mx-4 rounded-2xl dark-blue-bg">
        <div className=" flex flex-col items-center justify-center w-full p-2 text-white">
          <div className="flex gap-[1.5rem] items-center justify-center mb-4 w-[90%]">
            <div className="text-center">
              <div className="text-[0.8rem]">Rank</div>
              <div className="text-xl font-bold joystix-text">+2141</div>
            </div>
            <div className="text-center">
              <div className="text-[0.8rem]">Score</div>
              <div className="text-xl font-bold joystix-text">453</div>
            </div>
            <div className="text-center">
              <div className="text-[0.8rem]">Followers</div>
              <div className="text-xl font-bold joystix-text ">232531</div>
            </div>
          </div>

          <div className=" bg-opacity-20 rounded-lg mb-4 w-full">
            <p className="text-xs text-white">
              Floki (FLOKI) is a cryptocurrency inspired by Elon Musk’s Shiba Inu dog, Floki. Originally launched as a meme coin, it has grown into a Web3 ecosystem with DeFi, NFTs, and a play-to-earn metaverse. The project includes Valhalla, an NFT gaming metaverse, and FlokiFi, a suite of DeFi products. Floki aims to combine meme culture with real-world utility and mass adoption.
            </p>
          </div>

          <div className="flex flex-col gap-2 mb-4 w-[100%]">
            <div className="text-center flex justify-between">
              <div className="text-md font-bold">tgBTC Contributing</div>
              <div className="text-sm ">2314</div>
            </div>
            <div className="text-center flex justify-between">
              <div className="text-md font-bold">SMIDAO Votes</div>
              <div className="text-sm ">43623</div>
            </div>
            <div className="text-center flex justify-between">
              <div className="text-md font-bold">Free Votes</div>
              <div className="text-sm ">2341</div>
            </div>
          </div>

          <div className="flex justify-between w-full gap-1">
            <button className="flex-1 flex items-center justify-center bg-white text-[#2181FF] bg-opacity-20 py-2 rounded-lg"><FaXTwitter /></button>
            <button className="flex-1 flex items-center justify-center bg-white bg-opacity-20 text-[#2181FF] py-2 rounded-lg"><FaFacebookF /></button>
            <button className="flex-1 flex items-center justify-center bg-white bg-opacity-20 text-[#2181FF] py-2 rounded-lg"><PiTelegramLogoBold /></button>
          </div>
          
          <div className="mt-4 text-center w-full">
            <button className="w-full bg-linear-to-b from-[#D97410] to-[#be6812] hover:bg-[#ffbf80] text-white py-2 rounded-lg text-lg font-bold">
              Vote
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Live Updates */}
      <div className="mt-6 mx-4 flex flex-col items-center">
        <h2 className="karmatic-text text-white text-2xl mb-4">LIVE UPDATES</h2>
        <Updates/>
      </div>
    </div>
  );
};

export default Community;