export function formatWalletAddress(address) {
  const start = address.slice(0, 7)
  const end = address.slice(-6)
  return `${start}...${end}`
}

export function isValidEmail(email) {
  return /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  )
}

export function cleanText(text) {
  return text.trim().toLowerCase()
}

export function formatMessageText(message) {
  const start = message.slice(0, 100)
  return `${start}.....`
}
