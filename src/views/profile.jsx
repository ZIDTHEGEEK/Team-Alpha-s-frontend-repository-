import React, { useState } from "react"
import { FaCamera, FaWallet } from "react-icons/fa"
import Select from "react-select"
import flags from "country-flag-icons/react/3x2" // For country flags

const countries = [
  { value: "US", label: "United States", flag: flags.US },
  { value: "CA", label: "Canada", flag: flags.CA },
  { value: "NG", label: "Nigeria", flag: flags.NG }, // Added Nigeria
  // Add more countries as needed
]

const ProfilePage = () => {
  const [isEditing, setIsEditing] = useState(false) // To toggle edit mode
  const [selectedCountry, setSelectedCountry] = useState(null)
  const [walletConnected, setWalletConnected] = useState(false)
  const [profileImage, setProfileImage] = useState(
    "https://via.placeholder.com/150"
  ) // Default profile image

  const handleEdit = () => {
    setIsEditing(!isEditing)
  }

  const handleWalletConnect = () => {
    setWalletConnected(!walletConnected)
  }

  const handleImageChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setProfileImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center bg-gray-100 p-5 m-0">
      {/* Profile Section */}
      <div className="bg-white shadow-lg rounded-lg w-screen h-screen max-w4xl p-5 m-0">
        {/* Edit Button */}
        <div className="flex justify-end mb-4">
          <button
            onClick={handleEdit}
            className="text-blue-600 bg-gray-200 px-4 py-2 rounded-md"
          >
            {isEditing ? "Cancel" : "Edit"}
          </button>
        </div>

        {/* Profile Image and User Info */}
        <div className="flex items-center mb-8">
          {/* Profile Image */}
          <div className="relative mr-8">
            <img
              src={profileImage}
              alt="Profile"
              className="w-32 h-32 rounded-full object-cover"
            />
            {isEditing && (
              <input
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="absolute bottom-0 right-0 p-2 bg-gray-800 rounded-full text-white cursor-pointer"
              />
            )}
            {isEditing && (
              <button className="absolute bottom-0 right-0 p-2 bg-gray-800 rounded-full text-white">
                <FaCamera />
              </button>
            )}
          </div>
          {/* User Info */}
          <div>
            <h2 className="text-2xl font-semibold">John Doe</h2>
            <p className="text-gray-500">johndoe@gmail.com</p>
          </div>
        </div>

        {/* Form */}
        <form className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {/* Full Name */}
          <div>
            <label className="block text-sm font-medium">Full Name</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="John Doe"
              disabled={!isEditing}
            />
          </div>

          {/* Username */}
          <div>
            <label className="block text-sm font-medium">Username</label>
            <input
              type="text"
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              placeholder="@johndoe"
              disabled={!isEditing}
            />
          </div>

          {/* Gender */}
          <div>
            <label className="block text-sm font-medium">Gender</label>
            <select
              className="mt-1 block w-full border border-gray-300 rounded-md p-2"
              disabled={!isEditing}
            >
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>

          {/* Country */}
          <div>
            <label className="block text-sm font-medium">Country</label>
            <Select
              value={selectedCountry}
              onChange={setSelectedCountry}
              options={countries}
              formatOptionLabel={(country) => (
                <div className="flex items-center">
                  <img
                    src={country.flag}
                    alt={country.label}
                    style={{ width: "20px", marginRight: "10px" }}
                  />
                  {country.label}
                </div>
              )}
              isDisabled={!isEditing}
            />
          </div>

          {/* Phone Number */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">Phone Number</label>
            <div className="flex">
              <input
                type="text"
                className="mt-1 block w-20 border border-gray-300 rounded-md p-2"
                placeholder="+234" // Nigeria's country code
                disabled={!isEditing}
              />
              <input
                type="text"
                className="mt-1 block w-full ml-2 border border-gray-300 rounded-md p-2"
                placeholder="123-456-7890"
                disabled={!isEditing}
              />
            </div>
          </div>

          {/* Wallet Address */}
          <div className="col-span-2">
            <label className="block text-sm font-medium">
              My Wallet Address
            </label>
            {walletConnected ? (
              <div className="mt-2">
                <p className="text-green-600">Connected: 0x123...456</p>
                <button
                  className="mt-2 text-white bg-red-500 p-2 rounded-lg"
                  onClick={handleWalletConnect}
                >
                  Disconnect Wallet
                </button>
              </div>
            ) : (
              <button
                className="mt-2 text-white bg-blue-500 p-2 rounded-lg"
                onClick={handleWalletConnect}
              >
                <FaWallet className="inline mr-2" />
                Add Wallet Address
              </button>
            )}
          </div>
        </form>

        {/* Save Button */}
        {isEditing && (
          <div className="mt-8 flex justify-end">
            <button className="bg-green-600 text-white px-4 py-2 rounded-md">
              Save Changes
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProfilePage
