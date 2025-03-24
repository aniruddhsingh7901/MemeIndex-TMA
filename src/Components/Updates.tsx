const liveUpdates = [
    { emoji:"🎉", label:"party", user: '@SerafinMex', action: '$FLOKI', amount: '1 tgBTC' },
    { emoji:"💰", label:"Earn", user: '@TrumpKingUSA', action: '$FLOKI', amount: '8 tgBTC' },
    { emoji:"🔥", label:"Fire", user: '@TrumpKingUSA', action: '$FLOKI', amount: '1 tgBTC' },
  ];
const Updates = () => {
  return (
    <div className="w-full mb-4">
      <div className=" border border-[#258BF7] rounded-xl w-[100%]">
            {liveUpdates.map((update, index) => (
              <div 
              key={index} 
              className={`p-3 flex gap-1 ${index !== liveUpdates.length - 1 ? 'border-b-2 border-dashed' : ''} 
                      ${index === 0 ? 'rounded-t-xl' : ''} 
                      ${index === liveUpdates.length - 1 ? 'rounded-b-xl' : ''}`} 
              style={{
                  backgroundColor: '#0069FF',
                  borderImage: index !== liveUpdates.length - 1 ? 'repeating-linear-gradient(90deg, #258BF7 0 10px, transparent 10px 20px) 1' : 'none'
              }}
      >
          <div><span role="img" aria-label={update.label}>{update.emoji}</span></div>
          <div className="text-white text-xs">
              <span className="mb-2">User {update.user}</span> voted for <span className="text-[#E9821C] font-bold">{update.action}</span>  
              <span className="font-bold ml-2">with <span className="text-[#E9821C]">{update.amount}</span> </span>
          </div>
          </div>
            ))}
        </div>
    </div>
  )
}

export default Updates
