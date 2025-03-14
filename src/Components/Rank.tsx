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
    <div className="blue-bg pt-4 min-h-screen min-w-full flex flex-col items-center text-white pb-14">
      <h2 className=" karmatic-text text-lg">
        SEASON 1 RANK
      </h2>
      <div className="w-full text-sm flex flex-col items-center justify-center gap-4 max-w-md bg-transparent rounded-lg p-4 shadow-lg">
          <div className="grid grid-cols-9 w-full text-white font-semibold rounded-lg border border-[#2181FF] overflow-hidden bg-gradient-to-t from-[#0140FF] via-[#0059FF] to-[#0065FF] shadow-sm">
                <div className="p-3 flex justify-center items-center border-r border-[#2181FF] col-span-2 pl-2">Rank</div>
                <div className="p-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Name</div>
                <div className="p-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">Score</div>
                <div className="p-2 flex justify-center items-center col-span-3">Vote</div>
          </div>
          {rankings.map((item) => (
                <div key={item.rank} className="grid grid-cols-9 bg-transparent text-white font-semibold rounded-lg border border-[#2181FF] w-full overflow-hidden">
                  <div className="p-3 flex justify-center items-center border-r border-[#2181FF] col-span-2 pl-2">#{item.rank}</div>
                  <div className="p-2 flex justify-center items-center border-r border-[#2181FF] col-span-2">{item.name}</div>
                  <div className={`p-2 flex justify-center items-center border-r text-xl border-[#2181FF] col-span-2 text-bold ${item.trend === "up" ? "text-green-400" : "text-red-600"}`}>
                  <span className="text-white text-sm">{item.score} </span> {item.trend === "up" ? <MdArrowOutward />
            : <FiArrowDownRight />}
                  </div>
                  <div className="p-2 flex justify-center items-center col-span-3">
                  <button className="bg-gradient-to-b from-[#F78F27] to-[#be6812] text-white px-3 py-1 rounded-lg transition-all duration-300 
                                group-hover:from-[#F78F27] group-hover:to-[#92500e]">
                To elect
              </button>
                  </div>
                </div>
          ))}
      </div>
    </div>
  );
};

export default MemeIndexRanking;
