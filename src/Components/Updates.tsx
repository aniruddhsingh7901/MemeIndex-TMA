const liveUpdates = [
    { user: '@SerafinMex', action: '$FLOKI', amount: '1 tgBTC' },
    { user: '@TrumpKingUSA', action: '$FLOKI', amount: '8 tgBTC' },
    { user: '@TrumpKingUSA', action: '$FLOKI', amount: '1 tgBTC' },
  ];
const Updates = () => {
  return (
    <div className="w-full mb-4">
      <div className=" border border-[#258BF7] rounded-xl w-[100%]">
          {liveUpdates.map((update, index) => (
            <div 
        key={index} 
        className="p-3 border-b-2 border-dashed" 
        style={{
            backgroundColor: '#0069FF',
            borderImage: 'repeating-linear-gradient(90deg, #258BF7 0 10px, transparent 10px 20px) 1'
        }}
    >
        <div className="text-white text-sm">
            <span className="font-bold">User {update.user}</span> voted for <span className="text-[#E9821C] font-bold">{update.action}</span>  
            <span className="font-bold ml-2">with <span className="text-[#E9821C]">{update.amount}</span> </span>
        </div>
        </div>
          ))}
        </div>
    </div>
  )
}

export default Updates
