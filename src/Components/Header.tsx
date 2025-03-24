
const Header = () => {
  const voteBalance= 4324214;
  return (
    <div className="flex items-center justify-center pt-4 blue-bg">
      <div className="bg-linear-to-b from-[#000845] to-[#000BCD] p-4 rounded-lg w-[95%] max-w-md text-center flex item-center justify-between">
        <div className="flex flex-col text-left">
            <h2 className="karmatic-text text-sm">MEMEINDEX</h2>
            <h2 className="text-sm joystix-text"> BATTLE ARENA</h2>
        </div>
         <div className="flex">
          <div className="flex flex-col  text-right">
              <div className="text-xs">Vote Balance</div>
              <div className="font-semibold">{voteBalance}</div>
          </div>
         </div>   
        </div>
    </div>
  )
}

export default Header
