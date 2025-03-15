
import Ranking from "../Components/Ranking";
const MemeIndexRanking = ({activeTab,setActiveTab}:{activeTab:string,setActiveTab:React.Dispatch<React.SetStateAction<string>>}) => {
  return (
    <div className="blue-bg pt-4 min-h-screen min-w-full flex flex-col items-center text-white pb-14">
      <h2 className=" karmatic-text text-lg">
        SEASON 1 RANK
      </h2>
      <Ranking activeTab={activeTab} setActiveTab={setActiveTab}/>
    </div>
  );
};

export default MemeIndexRanking;
