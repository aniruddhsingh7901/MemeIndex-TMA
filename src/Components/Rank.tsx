import { MdArrowOutward } from "react-icons/md";
import { FiArrowDownRight } from "react-icons/fi";

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

const MemeIndexRanking = () => {
  return (
    <div className="w-full min-h-screen flex flex-col items-center text-white pb-14" style={{ backgroundColor: "#0065FF" }}>
      {/* Header */}
      <div className="w-full bg-blue-800 py-4 mb-4 flex justify-center">
        <h1 className="text-2xl font-bold text-white">MEMEINDEX BATTLE ARENA</h1>
      </div>
      
      {/* Season Title */}
      <h2 className="text-xl font-bold mb-6 bg-blue-500 px-8 py-2 rounded-lg">
        SEASON 1 RANK
      </h2>
      
      {/* Table Container - Full Width */}
      <div className="w-full px-4 sm:px-6 md:px-8 lg:px-10">
        <div className="w-full text-sm flex flex-col items-center justify-center gap-4 bg-transparent rounded-lg">
          {/* Table Header */}
          <div className="grid grid-cols-9 w-full text-white font-semibold rounded-lg border border-[#2181FF] overflow-hidden bg-gradient-to-t from-[#0140FF] via-[#0059FF] to-[#0065FF] shadow-sm">
            <div className="p-3 flex justify-center items-center border-r border-[#2181FF] col-span-2">Rank</div>
            <div className="p-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Name</div>
            <div className="p-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Score</div>
            <div className="p-2 flex justify-center items-center col-span-3">Vote</div>
          </div>
          
          {/* Table Rows */}
          {rankings.map((item) => (
            <div key={item.rank} className="grid grid-cols-9 bg-transparent text-white font-semibold rounded-lg border border-[#2181FF] w-full overflow-hidden">
              <div className="p-3 flex justify-center items-center border-r border-[#2181FF] col-span-2">#{item.rank}</div>
              <div className="p-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">{item.name}</div>
              <div className={`p-2 flex justify-center items-center border-r border-[#2181FF] col-span-2 ${item.trend === "up" ? "text-green-400" : "text-red-600"}`}>
                <span className="text-white mr-1">{item.score}</span> 
                {item.trend === "up" ? <MdArrowOutward /> : <FiArrowDownRight />}
              </div>
              <div className="p-2 flex justify-center items-center col-span-3">
                <button className="bg-gradient-to-b from-[#F78F27] to-[#be6812] text-white px-3 py-1 rounded-lg transition-all duration-300 hover:from-[#F78F27] hover:to-[#92500e]">
                  To elect
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Navigation Footer */}
      <div className="fixed bottom-0 w-full bg-blue-900 flex justify-around items-center py-3">
        <div className="flex flex-col items-center">
          <span className="text-2xl">🏠</span>
          <span className="text-xs">Home</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">📊</span>
          <span className="text-xs">Rank</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">📋</span>
          <span className="text-xs">Tasks</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">👥</span>
          <span className="text-xs">Community</span>
        </div>
        <div className="flex flex-col items-center">
          <span className="text-2xl">👤</span>
          <span className="text-xs">Profile</span>
        </div>
      </div>
    </div>
  );
};

export default MemeIndexRanking;