import React, { useState } from 'react';
import { TiTick } from "react-icons/ti";
interface TaskItem {
  id: number;
  title: string;
  votePower: number;
  claimed: boolean;
}

const Tasks: React.FC = () => {
  const [tasks, setTasks] = useState<TaskItem[]>([
    { id: 1, title: "Launch & Play Trump's Empire!", votePower: 200, claimed: false },
    { id: 2, title: "Rich App Free Mining $DOGE", votePower: 200, claimed: false },
    { id: 3, title: "Boost $MINER", votePower: 200, claimed: false },
    { id: 4, title: "Join Miner Announcements", votePower: 200, claimed: false },
  ]);

  const [completedTasks, setCompletedTasks] = useState<string[]>([
    "Play Punchline and Finish Tasks",
    "Join Jana Crypto Queen Channel"
  ]);

  const handleClaim = (taskId: number) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, claimed: true } : task
    ));
  };

  return (
    <div className="blue-bg min-h-screen w-full max-w-md mx-auto p-4">
      <div className="text-center mb-6 flex flex-col items-center justify-center">
        <h2 className="karmatic-text text-white text-lg">
          MEME. VOTE. EARN!
        </h2>
        <p className="text-white text-xs font-semibold mt-2 text-center">
          Complete daily tasks, vote for your favorite meme coins and get VOSE tokens!
        </p>
      </div>

      <div className="space-y-4">
        {tasks.map((task) => (
          <div 
            key={task.id} 
            className={`
              ${task.claimed 
                ? 'bg-transparent border-2 border-[#2181FF] border-dashed text-[#2181FF] rounded-lg p-4 flex justify-between items-center'
                : 'bg-transparent border border-[#2181FF] text-white'}
              rounded-lg p-4 flex justify-between items-center
              transition-all duration-300 ease-in-out
            `}
          >
            <div className='flex  items-center justify-between'>
              <div className='flex flex-col'>
              <div className="text-xs">{task.title}</div>
              <div className={`text-sm ${task.claimed ? 'text-[#2181FF]' : 'text-blue-200'}`}>
                +{task.votePower} Vote
              </div>
              </div>
            </div>
            {task.claimed ? (
              <button className="text-white bg-[#2282FF] px-3 py-2 rounded-lg  outline-hidden">
              <TiTick />
              </button>
            ) : (
              <button 
                onClick={() => handleClaim(task.id)}
                className="bg-white text-blue-500 px-2 py-2 text-sm rounded-md font-bold outline-hidden
"
              >
                Claim
              </button>
            )}
          </div>
        ))}

        {completedTasks.map((task, index) => (
          <div 
            key={index} 
            className="
              bg-transparent border-2 border-[#2181FF] border-dashed 
              text-[#2181FF] rounded-lg p-4 
              flex justify-between items-center 
            "
          >
            <div className="">{task}</div>
            <button className="text-white bg-[#2282FF] px-3 py-2 rounded-lg focus:outline-none focus:ring-0">
            <TiTick />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tasks;