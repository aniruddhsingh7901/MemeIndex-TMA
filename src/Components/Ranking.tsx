import React, { useState, useEffect } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

interface RankingProps {
  activeTab: string;
  setActiveTab: React.Dispatch<React.SetStateAction<string>>;
}

const Ranking: React.FC<RankingProps> = ({ activeTab, setActiveTab }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input
  const [animateItems, setAnimateItems] = useState<boolean[]>([]);

  const rankings = [
    { rank: 1, name: "#DOGE", score: 1000, trend: "up", icon: "🐶" },
    { rank: 2, name: "#WIF", score: 950, trend: "down", icon: "🐺" },
    { rank: 3, name: "#FLOKI", score: 900, trend: "up", icon: "🦊" },
    { rank: 4, name: "#PEPE", score: 850, trend: "up", icon: "🐸" },
    { rank: 5, name: "#SHIB", score: 800, trend: "down", icon: "🐕" },
    { rank: 6, name: "#FLOKI", score: 750, trend: "up", icon: "🦊" },
    { rank: 7, name: "#WIF", score: 700, trend: "down", icon: "🐺" },
    { rank: 8, name: "#SHIB", score: 650, trend: "up", icon: "🐕" },
    { rank: 9, name: "#FLOKI", score: 600, trend: "down", icon: "🦊" }
  ];

  // Initialize animation state
  useEffect(() => {
    const initialAnimateState = rankings.map(() => false);
    
    // Stagger animations
    rankings.forEach((_, index) => {
      setTimeout(() => {
        setAnimateItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 100 * (index + 1));
    });

    setAnimateItems(initialAnimateState);
  }, []);

  const filteredRankings = activeTab === "Rank"
    ? rankings.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : rankings.slice(0, 5);

  return (
    <div className="blue-bg min-w-full flex flex-col items-center text-white pb-3">
      <div className="w-full text-sm flex flex-col items-center justify-center gap-2 max-w-md bg-transparent rounded-lg p-4">
        <div className="w-full joystix-text text-lg text-center mb-2 animate-glow">
          {activeTab === "Home" ? "TOP-10" : "SEASON 1 RANK"}
        </div>
        
        <div className="grid grid-cols-9 w-full text-white font-semibold rounded-lg border border-[#2181FF] overflow-hidden bg-gradient-to-t from-[#0140FF] via-[#0059FF] to-[#0065FF] shadow-glow">
          <div className="p-1 my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2 pl-2">Rank</div>
          <div className="p-1 my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Name</div>
          <div className="p-1 my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Score</div>
          <div className="p-1 my-2 flex justify-center items-center col-span-3">Vote</div>
        </div>

        {activeTab === "Rank" && (
          <div className="relative w-full animate-float">
            <IoSearch className="absolute right-3 text-xl top-1/2 transform -translate-y-1/2 text-white" />
            <input
              type="text"
              placeholder="Search Tokens"
              className="bg-[#549FFF] w-full py-3 pl-4 pr-10 rounded-md outline-none text-white border border-[#2181FF]"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        )}

        {filteredRankings.map((item, index) => (
          <div 
            key={item.rank} 
            className={`grid grid-cols-9 bg-transparent text-white font-semibold rounded-lg border border-[#2181FF] w-full overflow-hidden shadow-glow transform transition-all duration-500 ${animateItems[index] ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          >
            <div className="my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2 pl-2">
              <span className="mr-1">{item.icon}</span> #{item.rank}
            </div>
            <div className="my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2 joystix-text text-xs">{item.name}</div>
            <div className={`my-2 flex justify-center items-center border-r text-xl border-[#2181FF] col-span-2 font-bold ${item.trend === "up" ? "text-green-400" : "text-red-600"}`}>
              <span className="text-white text-sm">{item.score} </span> {item.trend === "up" ? <MdArrowOutward className="animate-pulse" /> : <FiArrowDownRight className="animate-pulse" />}
            </div>
            <div className="my-2 flex justify-center items-center col-span-3">
              <button className="bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-1 rounded-lg transition-all duration-300
                    hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] outline-none border-none
                    focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
                    focus:shadow-none active:outline-none active:border-none animate-button-pulse">
                To elect
              </button>
            </div>
          </div>
        ))}

        {activeTab === "Home" && (
          <button 
            className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-xs hover:from-[#F78F27] hover:via-[#a6410f] hover:to-[#7d2603] font-bold shadow-glow animate-button-pulse transform hover:scale-105" 
            onClick={() => setActiveTab('Rank')}
          >
            View Full Rankings
          </button>
        )}
      </div>
    </div>
  );
};

export default Ranking;
