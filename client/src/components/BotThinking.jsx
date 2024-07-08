import bot from "../assets/bot.svg"
import "./BotThinking.css"

function BotThinking() {
  return (
    <>
      <div className="text-white font-poppins flex gap-4 justify-start items-center">
        <img src={bot} alt="" className="min-w-[3rem]" />
        <div className="bouncing-loader">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </div>
    </>
  )
}

export default BotThinking
