import { useState } from "react"
import { FaPaperclip } from "react-icons/fa" // Attachment icon

const EmailContent = ({ email }) => {
  const [replyMessage, setReplyMessage] = useState("") // State to track reply message
  const [showSendButton, setShowSendButton] = useState(false) // State to track if the send button should appear
  const [attachedFile, setAttachedFile] = useState(null) // State to store attached file

  // Handle reply message typing
  const handleReplyChange = (e) => {
    setReplyMessage(e.target.value)
    setShowSendButton(e.target.value.trim().length > 0) // Show send button when user types something
  }

  // Handle file attachment
  const handleFileAttach = (e) => {
    const file = e.target.files[0]
    setAttachedFile(file)
  }

  return (
    <div className="w-full h-screen p-6 flex flex-col">
      {/* Email Subject */}
      <div className="mb-6 border-b pb-4">
        <h1 className="text-2xl font-bold">{email.subject}</h1>
      </div>

      {/* Sender Info */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center space-x-4">
          {/* Profile Image */}
          <img
            src={email.senderProfileImage}
            alt={`${email.senderName}'s profile`}
            className="w-10 h-10 rounded-full"
          />

          {/* Sender Details */}
          <div className="flex flex-col">
            <span className="font-semibold text-lg">{email.senderName}</span>
            <span className="text-gray-500">{email.senderAddress}</span>
          </div>
        </div>

        {/* Date */}
        <span className="text-gray-400">{email.date}</span>
      </div>

      {/* Email Body */}
      <div className="mb-6 text-gray-800 leading-relaxed flex-grow">
        <p>{email.body}</p>
      </div>

      {/* Reply Section at the bottom */}
      <div className="mt-auto">
        {/* Text area for replying */}
        <textarea
          className="w-full h-24 p-4 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Reply to this email... (Attach files if needed)"
          value={replyMessage}
          onChange={handleReplyChange}
        ></textarea>

        {/* Attachment and Send Section */}
        <div className="flex justify-between items-center mt-2">
          {/* Attachment icon */}
          <label
            htmlFor="fileInput"
            className="flex items-center text-blue-500 cursor-pointer"
          >
            <FaPaperclip className="mr-2" />
            Attach File
          </label>
          <input
            id="fileInput"
            type="file"
            onChange={handleFileAttach}
            className="hidden"
          />

          {/* Display attached file name */}
          {attachedFile && (
            <span className="text-sm text-gray-500 ml-4">
              Attached: {attachedFile.name}
            </span>
          )}

          {/* Send button (only shows when message is typed) */}
          {showSendButton && (
            <button className="bg-blue-500 text-white py-1 px-3 rounded-md">
              Send
            </button>
          )}
        </div>
      </div>
    </div>
  )
}

// Example email data
const emailData = {
  subject: "Meeting Reminder: Monday",
  senderName: "John Doe",
  senderAddress: "john.doe@example.com",
  senderProfileImage: "https://via.placeholder.com/150", // Placeholder image for sender profile
  date: "September 29, 2024",
  body: `This is a reminder for our meeting scheduled for Monday at 10:00 AM. Please don't forget to review the attached agenda and let me know if you have any questions. Looking forward to the meeting.`,
}

const EmailContentPage = () => {
  return (
    <div className="flex h-screen">
      {/* Left side will contain other elements (design this later) */}
      <div className="w-1/3 bg-gray-100 h-full">
        {/* Placeholder for the left side of the screen */}
      </div>

      {/* Right side containing email content */}
      <div className="w-2/3 bg-white shadow-lg h-full">
        <EmailContent email={emailData} />
      </div>
    </div>
  )
}

export default EmailContentPage
