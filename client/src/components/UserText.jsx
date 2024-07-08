import user from "../assets/user.svg"

function BotText({ content }) {
  return (
    <>
      <div className="text-white font-poppins flex gap-4">
        <div className="grow"></div>
        <div className="bg-blue-600 p-4 rounded-md flex items-center">
          {content}
        </div>
        <img src={user} alt="" className="min-w-[3rem]" />
      </div>
    </>
  )
}

export default BotText
