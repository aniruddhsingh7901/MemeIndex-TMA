import React, { useState, useEffect } from "react";

interface Update {
  emoji: string;
  label: string;
  user: string;
  action: string;
  amount: string;
  timestamp: number;
}

const Updates: React.FC = () => {
  const [liveUpdates, setLiveUpdates] = useState<Update[]>([
    { emoji: "🎉", label: "party", user: '@SerafinMex', action: '$FLOKI', amount: '1 tgBTC', timestamp: Date.now() - 30000 },
    { emoji: "💰", label: "Earn", user: '@TrumpKingUSA', action: '$FLOKI', amount: '8 tgBTC', timestamp: Date.now() - 60000 },
    { emoji: "🔥", label: "Fire", user: '@CryptoWhale', action: '$FLOKI', amount: '1 tgBTC', timestamp: Date.now() - 120000 }
  ]);
  
  const [animatedItems, setAnimatedItems] = useState<boolean[]>([]);

  // Initialize animation state
  useEffect(() => {
    const initialAnimateState = liveUpdates.map(() => false);
    
    // Stagger animations
    liveUpdates.forEach((_, index) => {
      setTimeout(() => {
        setAnimatedItems(prev => {
          const newState = [...prev];
          newState[index] = true;
          return newState;
        });
      }, 200 * (index + 1));
    });

    setAnimatedItems(initialAnimateState);
    
    // Simulate new updates coming in
    const interval = setInterval(() => {
      const newUpdate = generateRandomUpdate();
      setLiveUpdates(prev => {
        const newUpdates = [newUpdate, ...prev.slice(0, 2)]; // Keep only 3 most recent
        
        // Animate the new item
        setTimeout(() => {
          setAnimatedItems(prev => [true, ...prev.slice(0, 2)]);
        }, 100);
        
        return newUpdates;
      });
      
      setAnimatedItems(prev => [false, ...prev.slice(0, 2)]);
    }, 8000);
    
    return () => clearInterval(interval);
  }, []);
  
  // Generate random updates for simulation
  const generateRandomUpdate = (): Update => {
    const emojis = ["🎉", "💰", "🔥", "🚀", "💎", "👑"];
    const labels = ["party", "earn", "fire", "rocket", "diamond", "crown"];
    const users = ["@CryptoKing", "@MoonHodler", "@DiamondHands", "@TONMaster", "@MemeWizard"];
    const coins = ["$DOGE", "$SHIB", "$FLOKI", "$PEPE", "$WIF"];
    const amounts = ["1 tgBTC", "2 tgBTC", "5 tgBTC", "10 tgBTC"];
    
    const randomIndex = (arr: any[]) => Math.floor(Math.random() * arr.length);
    
    return {
      emoji: emojis[randomIndex(emojis)],
      label: labels[randomIndex(labels)],
      user: users[randomIndex(users)],
      action: coins[randomIndex(coins)],
      amount: amounts[randomIndex(amounts)],
      timestamp: Date.now()
    };
  };

  return (
    <div className="w-full mb-4">
      <div className="border border-[#258BF7] rounded-xl w-[100%] shadow-glow overflow-hidden">
        {liveUpdates.map((update, index) => (
          <div
            key={update.timestamp}
            className={`p-3 flex gap-1 ${
              index !== liveUpdates.length - 1 ? 'border-b border-dashed border-[#258BF7]' : ''
            } ${index === 0 ? 'rounded-t-xl' : ''} ${
              index === liveUpdates.length - 1 ? 'rounded-b-xl' : ''
            } bg-[#0069FF] transform transition-all duration-500 ${
              animatedItems[index] ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
            }`}
          >
            <div className="animate-pulse-slow">
              <span role="img" aria-label={update.label} className="text-xl">
                {update.emoji}
              </span>
            </div>
            <div className="text-white text-xs">
              <span className="mb-2 font-bold">User {update.user}</span> voted for{' '}
              <span className="text-[#E9821C] font-bold animate-glow">{update.action}</span>
              <span className="font-bold ml-2">
                with <span className="text-[#E9821C]">{update.amount}</span>{' '}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Updates;
