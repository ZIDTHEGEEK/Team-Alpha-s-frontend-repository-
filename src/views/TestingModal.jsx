import { useState } from "react"
import Modal from "../components/Modal/Modal"

function HomePage() {
  const [onClick, setOnClick] = useState(false)
  return (
    <div className="bg-white min-h-screen flex">
      <button onClick={() => setOnClick(!onClick)}>button</button>
      {onClick ? <Modal setOnClick={setOnClick} /> : ""}
    </div>
  )
}

export default HomePage
