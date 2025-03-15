import Ranking from "../Components/Ranking"
import { useState,useEffect } from "react";
import Updates from "../Components/Updates";
const Home=()=>{
    const [timeRemaining, setTimeRemaining] = useState({
        days: 5,
        hours: 21,
        minutes: 21,
        seconds: 45
      });
    
      useEffect(() => {
        const interval = setInterval(() => {
          if (timeRemaining.seconds > 0) {
            setTimeRemaining(prev => ({ ...prev, seconds: prev.seconds - 1 }));
          } else if (timeRemaining.minutes > 0) {
            setTimeRemaining(prev => ({ 
              ...prev, 
              minutes: prev.minutes - 1,
              seconds: 59
            }));
          } else if (timeRemaining.hours > 0) {
            setTimeRemaining(prev => ({ 
              ...prev, 
              hours: prev.hours - 1,
              minutes: 59,
              seconds: 59
            }));
          } else if (timeRemaining.days > 0) {
            setTimeRemaining(prev => ({ 
              ...prev, 
              days: prev.days - 1,
              hours: 23,
              minutes: 59,
              seconds: 59
            }));
          }
        }, 1000);
    
        return () => clearInterval(interval);
      }, [timeRemaining]);
    
      // Progress calculation
      const totalSecondsInSeason = 5 * 24 * 60 * 60 + 21 * 60 * 60 + 21 * 60 + 45; // Example total
      const currentProgressSeconds = totalSecondsInSeason - (
        timeRemaining.days * 24 * 60 * 60 + 
        timeRemaining.hours * 60 * 60 + 
        timeRemaining.minutes * 60 + 
        timeRemaining.seconds
      );
      const progressPercentage = (currentProgressSeconds / totalSecondsInSeason) * 100;
    
    return(
        <div className="blue-bg pt-4 min-h-screen flex flex-col items-center text-white pb-14 min-w-full">
             <div className="flex flex-col bg-[#0066FF] border border-[#2181FF] shadow-md py-2 rounded-xl items-center justify-center w-[92%]">
                <h2 className="karmatic-text text-xl">--- SEASON 1 ---</h2>
      
                <div className="flex flex-col mt-2">
                    <div className="w-full bg-[#D9D9D9] h-[1.4rem] rounded-sm overflow-hidden">
                    <div 
                        className="bg-orange-400 h-[4rem] transition-all rounded-sm duration-1000 ease-linear"
                        style={{ width: `${progressPercentage * 100}%` }}
                    ></div>
                    </div>
                    <div className="flex justify-between text-white m-2">
                    <span className=" text-[15px]">Time Until The End Of The Season: <span className=" font-bold text-xs"> {timeRemaining.days}d {timeRemaining.hours}h {timeRemaining.minutes}m {timeRemaining.seconds}s </span></span>
                    </div>
                </div>
            </div>
            <img src="./home1.jpg" width={'92%'} className="mt-4 rounded-xl"/>
            <Ranking/>
            <div className="w-[92%] flex gap-2 mt-7">
                <div>
                <img src="./home5.png" className="rounded-xl"/>
                </div>
                {/* <div className="flex flex-col gap-2">
                    <img src="./home3.jpg" className="rounded-xl"/>
                    <img src="./home4.jpg" className="rounded-xl"/>
                </div> */}
            </div>
            <div className="w-[92%] flex flex-col items-center justify-center gap-2 mt-7">
                <h2 className="karmatic-text text-xl">LIVE ACTIVITY FEED</h2>
                <Updates/>
            </div>
        </div>
    )
}
export default Home;