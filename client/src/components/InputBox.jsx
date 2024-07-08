import { useState } from "react"
import { IoMdSend } from "react-icons/io"

function InputBox({ handleSendMessage }) {
  const [message, setMessage] = useState("")

  const submitMessage = () => {
    if (message.trim().length > 0) {
      handleSendMessage(message)
      setMessage("")
    }
  }
  return (
    <>
      <div className="sticky bottom-0 w-3/4 md:w-1/2 mx-auto m-4">
        <input
          type="text"
          className="w-full py-2 px-3 rounded-md text-black font-poppins tracking-wide focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <IoMdSend
          className="absolute top-1.5 right-1.5 text-black text-3xl cursor-pointer hover:bg-gray-200 rounded-md p-1"
          onClick={submitMessage}
        />
      </div>
    </>
  )
}

export default InputBox
