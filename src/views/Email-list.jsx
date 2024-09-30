import React, { useState } from 'react';
import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Icons for starred and unstarred emails
import { FiRefreshCcw } from 'react-icons/fi'; // Reload icon

const EmailList = () => {
  const [emails, setEmails] = useState([
    {
      id: 1,
      subject: 'Welcome to SuiMail!',
      sender: 'SuiMail Team',
      message: 'Thank you for signing up to SuiMail. We are thrilled to have you on board and look forward to providing you with secure and private email solutions.',
      starred: true,
      date: '2024-09-29',
    },
    {
      id: 2,
      subject: 'Your Security Update',
      sender: 'Security Team',
      message: 'This is a quick update regarding your security settings. Please review the settings to ensure your account is secure.',
      starred: false,
      date: '2024-09-28',
    },
    {
      id: 3,
      subject: 'Meeting Reminder',
      sender: 'John Doe',
      message: 'This is a friendly reminder for our upcoming meeting scheduled on Monday. Don’t forget to review the attached documents.',
      starred: true,
      date: '2024-09-27',
    },
  ]);

  const [selectedEmails, setSelectedEmails] = useState([]);
  const [selectAll, setSelectAll] = useState(false);

  // Toggle selection for individual email
  const toggleSelectEmail = (id) => {
    if (selectedEmails.includes(id)) {
      setSelectedEmails(selectedEmails.filter((emailId) => emailId !== id));
    } else {
      setSelectedEmails([...selectedEmails, id]);
    }
  };

  // Toggle select all emails
  const toggleSelectAll = () => {
    if (selectAll) {
      setSelectedEmails([]);
    } else {
      setSelectedEmails(emails.map((email) => email.id));
    }
    setSelectAll(!selectAll);
  };

  // Toggle starred status
  const toggleStarred = (id) => {
    setEmails(
      emails.map((email) =>
        email.id === id ? { ...email, starred: !email.starred } : email
      )
    );
  };

  // Shorten message preview
  const getMessagePreview = (message) => {
    if (message.length > 50) {
      return message.substring(0, 50) + '...'; // Limit message preview to 50 characters
    }
    return message;
  };

  return (
    <div className="p-6">
      {/* Select All and Reload Section */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-4">
          <input
            type="checkbox"
            checked={selectAll}
            onChange={toggleSelectAll}
            className="cursor-pointer"
          />
          <button onClick={() => window.location.reload()} className="text-gray-600">
            <FiRefreshCcw size={24} />
          </button>
        </div>
      </div>

      {/* Email List Section */}
      <div className="divide-y divide-gray-200">
        {emails.map((email) => (
          <div
            key={email.id}
            className="flex items-center justify-between py-4 px-2 hover:bg-gray-50"
          >
            <div className="flex items-center space-x-4">
              {/* Select Box */}
              <input
                type="checkbox"
                checked={selectedEmails.includes(email.id)}
                onChange={() => toggleSelectEmail(email.id)}
                className="cursor-pointer"
              />
              
              {/* Starred Icon */}
              <div
                onClick={() => toggleStarred(email.id)}
                className="cursor-pointer"
              >
                {email.starred ? (
                  <FaStar className="text-yellow-500" />
                ) : (
                  <FaStarHalfAlt className="text-gray-400" />
                )}
              </div>

              {/* Email Details */}
              <div className="flex flex-col">
                <span className="font-semibold">{email.subject}</span>
                <span className="text-sm text-gray-600">{email.sender}</span>
                {/* Message Preview */}
                <span className="text-sm text-gray-500">
                  {getMessagePreview(email.message)}
                </span>
              </div>
            </div>

            {/* Date at the End */}
            <div className="text-sm text-gray-600">{email.date}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmailList;
