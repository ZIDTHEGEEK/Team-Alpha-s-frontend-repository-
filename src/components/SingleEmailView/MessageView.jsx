import { useState } from "react"
import { FaStar, FaTrash, FaReply, FaForward } from "react-icons/fa"

const MessageView = () => {
  const img = "https://randomuser.me/api/portraits/men/1.jpg"

  const [mail] = useState({
    name: "john Doe",
    email: "john.doe@example.com",
    subject: "Website Application",
    timeStamp: "12:45 PM, Sep 27, 2024",
  })

  return (
    <div className="flex justify-end w-full p-6 bg-gray-100 min-h-screen h-full">
      {/* Email Container (50% width, right-aligned) */}
      <div className="w-1/2 bg-white p-6 rounded-lg shadow-md border-2 relative">
        {/* Profile Picture and Sender Info */}
        <div className="flex items-center mb-4 ">
          {/* Profile Picture with Blue Circle */}
          <div className="relative">
            <img
              src={img}
              alt="Profile"
              className="w-12 h-12 rounded-full object-cover border-4 border-blue-500"
            />
          </div>

          {/* Sender's Info */}
          <div className="ml-4 flex-grow items-center">
            <div className="flex justify-between items-center">
              <div>
                <p className="text-black-800 font-medium">{mail.name}</p>
                <p className="text-gray-600 text-sm">{mail.email}</p>
              </div>
              <div className="flex space-x-2 flex-col items-end">
                <div className="flex space-x-4 ">
                  <FaStar className="text-gray-400 hover:text-yellow-500 cursor-pointer" />
                  <FaTrash className="text-gray-400 hover:text-red-500 cursor-pointer" />
                </div>{" "}
                {/* Timestamp Below Icons */}
                <span className="text-gray-500 text-xs block">
                  {mail.timeStamp}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Subject */}
        <div className="mb-4">
          <h2 className="text-xl font-semibold text-gray-800">
            {mail.subject}
          </h2>
        </div>

        {/* Email Message Body */}
        <div className="message-body mb-4">
          <p className="text-black-700 leading-relaxed mb-4 text-sm">
            Hi Zayad,
          </p>
          <p className="text-black-700 leading-relaxed text-sm  mb-4">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consectetur molestiae at placeat quaerat accusantium architecto
            culpa voluptatibus voluptates quod totam?
          </p>
          <p className="text-black-700 leading-relaxed text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum,
            perferendis consectetur qui sequi asperiores tenetur nostrum id
            numquam laboriosam obcaecati quis deserunt voluptatem aut deleniti
            tempora mollitia eveniet vitae ea ipsum architecto illo quia hic.
            Officia quisquam excepturi nobis eius.
          </p>
          <p className="text-black-700 leading-relaxed text-sm mt-6">
            have a nice day,
          </p>
          <p className="text-black-700 leading-relaxed text-sm">Zayad</p>
        </div>

        {/* Reply and Forward Buttons */}
        <div className="flex space-x-4 absolute bottom-10 border-t w-[91%] border-black">
          <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 focus:outline-none mt-4">
            <FaReply className="mr-2" />
            Reply
          </button>
          <button className="flex items-center px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 focus:outline-none mt-4">
            <FaForward className="mr-2" />
            Forward
          </button>
        </div>
      </div>
    </div>
  )
}

export default MessageView
