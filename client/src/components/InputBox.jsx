import { useState } from "react"
import { IoMdSend } from "react-icons/io"
import { IoIosAttach } from "react-icons/io";

function InputBox({ handleSendMessage }) {
  const [message, setMessage] = useState("")
  const [selectedFiles, setSelectedFiles] = useState(null)

  const submitMessage = () => {


    
    if (message.trim().length > 0) {
      handleSendMessage(message, selectedFiles)
      setMessage("")
    }
  }

  const handleSelectedFiles = (event) => {
    setSelectedFiles(event.target.files)
  }

  return (
    <>
      {selectedFiles !== null ? <div className="text-white mx-auto w-full flex items-center justify-center">
    uploaded {selectedFiles.length} file(s)
  </div> : null}
      <div className="sticky bottom-0 w-3/4 md:w-1/2 mx-auto m-4 flex">
        <div className="my-auto"> 
        <input type="file" id="fileupload" className="hidden" onChange={handleSelectedFiles} accept=".jpg, .png"/>
        
        <label htmlFor="fileupload" className="hover:cursor-pointer">
          <IoIosAttach 
            className="text-3xl text-white"
          />
        </label>
         
        </div>
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
