const useLogout = () => {
  const logout = () => {
    localStorage.removeItem("sui_mail_jwt_token")
    localStorage.removeItem("sui_mail_jwt_data")

    window.location.href = "/auth/login"
  }

  return {
    logout,
  }
}

export default useLogout
