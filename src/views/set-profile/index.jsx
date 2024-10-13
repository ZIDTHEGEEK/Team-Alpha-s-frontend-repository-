import { useState } from "react"
import { toast } from "react-hot-toast"
import { cleanText, isValidEmail } from "../../utils"
import { useUpdateUserMutation } from "../../redux/hooks/user"

const SetProfilePage = () => {
  const [email, setEmail] = useState("")
  const [phone, setPhone] = useState("")
  const [fullName, setFullName] = useState("")
  const [username, setUsername] = useState("")

  const { mutateAsync: updateUser, isPending } = useUpdateUserMutation()

  const handleFormIsValid = () => {
    if (fullName.length === 0) {
      toast.error("Enter a valid full name")
      return false
    }

    if (username.length === 0) {
      toast.error("Enter a valid user name")
      return false
    }

    if (!isValidEmail(email)) {
      toast.error("Enter a valid email")
      return false
    }

    return true
  }

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      if (!handleFormIsValid()) return

      const data = {
        email: cleanText(email),
        phone: cleanText(phone),
        fullname: cleanText(fullName),
        username: cleanText(username),
      }

      const response = await updateUser(data)

      if (response.status === 200) {
        toast.success("Profile saved successfully")
        setTimeout(() => window.location.assign("/app"), 1000)
      }
    } catch (error) {
      console.log(error)
      if (
        error.response.data.message.toLowerCase() ===
        "you already have an account"
      ) {
        toast.error("Email exists on another account")
        return
      }
      toast.error(`Error occured: ${error.message}`)
    }
  }

  return (
    <div className="h-screen w-full flex items-center justify-center">
      <div className="w-full max-w-[700px] mx-auto">
        <div className="flex flex-col gap-2">
          <h1 className="text-3xl font-bold font-dm-sans text-[#0D1D54]">
            Complete your profile
          </h1>
          <p className="text-[#404B7C] font-medium">
            Enter your personal information
          </p>
        </div>

        <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-y-5">
          {/* Full Name & Username Row */}
          <div className="w-full flex flex-col xl:flex-row gap-x-4 gap-y-5">
            <div className="w-full xl:w-1/2 flex flex-col">
              <label className="block text-[#404B7C]" id="fullname">
                Full Name
              </label>

              <div className="w-full mt-2">
                <input
                  required
                  type="text"
                  id="fullname"
                  name="fullname"
                  value={fullName}
                  placeholder="Enter your full name"
                  onChange={(e) => setFullName(e.target.value)}
                  className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
                />
              </div>
            </div>

            <div className="w-full xl:w-1/2 flex flex-col">
              <label className="block text-[#404B7C]" htmlFor="username">
                Username
              </label>

              <div className="w-full mt-2">
                <input
                  required
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  placeholder="Enter nickname"
                  onChange={(e) => setUsername(e.target.value)}
                  className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
                />
              </div>
            </div>
          </div>

          {/* Email */}
          <div className="w-full xl:w-2/3">
            <label className="block text-[#404B7C]" htmlFor="email">
              Email
            </label>

            <div className="w-full mt-2">
              <input
                required
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder="Enter email address"
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
              />
            </div>
          </div>

          {/* Phone Number (Optional) */}
          <div className="w-full xl:w-2/3">
            <label className="block text-[#404B7C]" htmlFor="phone">
              Phone <span className="text-[#C6C6C6] text-sm">(Optional)</span>
            </label>

            <div className="w-full mt-2">
              <input
                type="text"
                id="phone"
                name="phone"
                value={phone}
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
                className="w-full px-7 py-5 rounded-lg border border-zinc-200 outline-none shadow placeholder:text-[#D5D5D5]"
              />
            </div>
          </div>

          {/* Submit Button */}
          <div className="mt-10">
            <button
              type="submit"
              disabled={isPending}
              className="w-full md:w-fit bg-gradient-to-b from-[#21C1FF] to-[#1B7CE6] py-5 px-14 rounded-md shadow duration-300"
            >
              <span className="text-white font-medium uppercase">
                Update Profile
              </span>
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default SetProfilePage
