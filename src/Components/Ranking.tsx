import { useState } from "react";
import { MdArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";
import { IoSearch } from "react-icons/io5";

const Ranking = ({ activeTab, setActiveTab }: { activeTab: string, setActiveTab: React.Dispatch<React.SetStateAction<string>> }) => {
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const rankings = [
    { rank: 1, name: "#DOGE", score: 1000, trend: "up" },
    { rank: 2, name: "#WIF", score: 950, trend: "down" },
    { rank: 3, name: "#FLOKI", score: 900, trend: "up" },
    { rank: 4, name: "#PEPE", score: 850, trend: "up" },
    { rank: 5, name: "#SHIB", score: 800, trend: "down" },
    { rank: 6, name: "#FLOKI", score: 750, trend: "up" },
    { rank: 7, name: "#WIF", score: 700, trend: "down" },
    { rank: 8, name: "#SHIB", score: 650, trend: "up" },
    { rank: 9, name: "#FLOKI", score: 600, trend: "down" },
  ];

  const filteredRankings = activeTab === "Rank"
    ? rankings.filter(item => item.name.toLowerCase().includes(searchQuery.toLowerCase()))
    : rankings.slice(0, 5); 

  return (
    <div className="blue-bg min-w-full flex flex-col items-center text-white pb-3">
      <div className="w-full text-sm flex flex-col items-center justify-center gap-2 max-w-md bg-transparent rounded-lg p-4">
        <div className="grid grid-cols-9 w-full text-white font-semibold rounded-lg border border-[#2181FF] overflow-hidden bg-gradient-to-t from-[#0140FF] via-[#0059FF] to-[#0065FF] shadow-sm">
          <div className="p-1 my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2 pl-2">Rank</div>
          <div className="p-1 my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Name</div>
          <div className="p-1 my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Score</div>
          <div className="p-1 my-2 flex justify-center items-center col-span-3">Vote</div>
        </div>

        {activeTab === "Rank" && (
          <div className="relative w-full">
            <IoSearch className="absolute right-3 text-xl top-1/2 transform -translate-y-1/2 text-white" />
            <input 
              type="text" 
              placeholder="Search Tokens" 
              className="bg-[#549FFF] w-full py-3 pl-4 pr-10 rounded-md outline-none text-white" 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} // Update search state
            />
          </div>
        )}

        {filteredRankings.map((item) => (
          <div key={item.rank} className="grid grid-cols-9 bg-transparent text-white font-semibold rounded-lg border border-[#2181FF] w-full overflow-hidden">
            <div className="my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2 pl-2">#{item.rank}</div>
            <div className="my-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">{item.name}</div>
            <div className={`my-2 flex justify-center items-center border-r text-xl border-[#2181FF] col-span-2 font-bold ${item.trend === "up" ? "text-green-400" : "text-red-600"}`}>
              <span className="text-white text-sm">{item.score} </span> {item.trend === "up" ? <MdArrowOutward /> : <FiArrowDownRight />}
            </div>
            <div className="my-2 flex justify-center items-center col-span-3">
            <button className="bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-1 rounded-lg transition-all duration-300 
                  hover:from-[#F78F27] hover:via-[#a6410f]  hover:to-[#7d2603] outline-none border-none 
                  focus:outline-none focus:ring-0 focus-visible:outline-none focus-visible:ring-0
                  focus:shadow-none active:outline-none active:border-none">
              To elect
            </button>
            </div>
          </div>
        ))}

        {activeTab === "Home" && (
          <button className="w-full bg-gradient-to-b from-[#fea750] via-[#cd853d] to-[#bc6917] text-white px-3 py-3 rounded-lg transition-all duration-300 text-xs hover:from-[#F78F27] hover:via-[#a6410f]  hover:to-[#7d2603] font-bold" onClick={() => setActiveTab('Rank')}>
            View Full Rankings
          </button>
        )}
      </div>
    </div>
  );
};

export default Ranking;
