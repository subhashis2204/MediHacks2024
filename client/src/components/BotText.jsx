import bot from "../assets/bot.svg"

function BotText({ content }) {
  return (
    <>
      <div className="text-white font-poppins flex gap-4">
        <img src={bot} alt="" className="min-w-[3rem]" />
        <div className="bg-gray-200 bg-opacity-25 p-4 rounded-md flex flex-col items-center">
          {content.split("\n").map((i, key) => {
            return <div key={key}>{i}</div>
          })}
        </div>
      </div>
    </>
  )
}

export default BotText
