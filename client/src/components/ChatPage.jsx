import BotText from "./BotText"
import UserText from "./UserText"
import { useEffect, useState } from "react"
import InputBox from "./InputBox"
import axios from "axios"
import BotThinking from "./BotThinking"

function ChatPage() {
  const [userResponded, setUserResponded] = useState(false)
  const [thinking, setThinking] = useState(true)
  const [messages, setMessages] = useState([])

  useEffect(() => {
    const getResponse = async () => {
      const response = await axios.post(
        "example api endpoint to receive the set of messages",
        {
          messages,
        }
      )
      setMessages((prevMessages) => [...prevMessages, response.data])
      setThinking(false)
    }

    getResponse()
  }, [])

  const handleUserResponse = async () => {
    const response = await axios.post("example api endpoint to send user message", {
      messages,
    })

    setMessages((prevMessages) => [...prevMessages, response.data])
    setThinking(false)
  }

  useEffect(() => {
    if (userResponded) {
      setThinking(true)
      handleUserResponse()
    }

    return setUserResponded(false)
  }, [userResponded])

  const handleSendMessage = (message) => {
    setMessages((prevMessages) => [
      ...prevMessages,
      { role: "user", content: message },
    ])

    setUserResponded(true)
  }

  const renderedMessages = messages.map((message, index) => {
    return (
      (message.role === "assistant" && (
        <BotText key={index} content={message.content} />
      )) ||
      (message.role === "user" && (
        <UserText key={index} content={message.content} />
      ))
    )
  })

  return (
    <>
      <div className="w-full h-full flex flex-col bg-chat-pattern md:bg-chat-pattern-desktop bg-cover bg-no-repeat bg-center">
        <div className="w-[60%] min-h-[88vh] mx-auto h-full bg-black mt-2 text-white rounded-md px-2 py-5 flex flex-col justify-start gap-4 grow">
          {renderedMessages}
          {thinking && <BotThinking />}
        </div>
        <InputBox handleSendMessage={handleSendMessage} />
      </div>
    </>
  )
}

export default ChatPage
