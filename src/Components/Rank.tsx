
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
    <div className="blue-bg pt-4 min-h-screen flex flex-col items-center text-white pb-14">

      <h2 className=" karmatic-text text-xl">
        SEASON 1 RANK
      </h2>


      <div className="w-full text-sm flex flex-col items-center justify-center gap-[1rem] max-w-md bg-transparent rounded-lg p-4 shadow-lg ">
      <div className="grid grid-cols-4 w-full justify-center items-center bg-transparent text-white font-semibold rounded-lg border border-[#2181FF] overflow-hidden">
        <div className="p-[0.5] m-2 flex justify-center items-center w-full border-r border-[#2181FF]">Rank</div>
        <div className="p-[0.5] m-2 flex justify-center items-center w-full border-r border-[#2181FF]">Name</div>
        <div className="p-[0.5] m-2 flex justify-center items-center w-full border-r border-[#2181FF]">Score</div>
        <div className="p-[0.5] m-2 flex justify-center items-center">Vote</div>
      </div>
        {rankings.map((item) => (
          <div key={item.rank} className="grid grid-cols-4 bg-transparent text-white font-semibold rounded-lg border border-[#2181FF] w-full overflow-hidden">
            <div className="p-[0.5] m-2 flex justify-center items-center flex-1 w-full  border-r border-[#2181FF]">#{item.rank}</div>
            <div className="p-[0.5] m-2 flex justify-center items-center flex-1 w-full border-r border-[#2181FF]">{item.name}</div>
            <span className={item.trend === "up" ? "p-[0.5] m-2 flex justify-center items-center w-full flex-1 border-r border-[#2181FF] text-green-400" : "p-[0.5] m-2 flex justify-center items-center flex-1 text-left border-r border-[#2181FF] text-red-400"}>
              {item.score} {item.trend === "up" ? "⬆" : "⬇"}
            </span>
            <div className="p-[0.5] m-2 flex justify-center items-center w-full">
            <button className="bg-[#F38B24] text-white px-2 py-1 rounded-lg hover:bg-[#e7b481]">To elect</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MemeIndexRanking;
