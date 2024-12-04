import { useEffect } from "react"
import PropTypes from "prop-types"
import { useLocation, useNavigate } from "react-router-dom"
import { useGetActiveUserDataQuery } from "../../api/hooks/user"

const publicRoutes = ["/", "/auth/login", "/auth/create-account"]

export default function AuthRouteController({ children }) {
  const navigate = useNavigate()
  const location = useLocation()
  const { data, isFetching, error } = useGetActiveUserDataQuery()

  useEffect(() => {
    if (error) {
      if (!publicRoutes.includes(location.pathname)) navigate("/auth/login")
      return
    }

    if (data && data.status === 200) {
      if (publicRoutes.includes(location.pathname)) navigate("/app")
    }
  }, [data, error, location.pathname, navigate])

  return isFetching ? <SuiMailLoadingScreen /> : children
}

AuthRouteController.propTypes = {
  children: PropTypes.element.isRequired,
}

const SuiMailLoadingScreen = () => {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="h-fit w-fit animate-pulse">
        <img
          src="/png/suimail-sidebar-logo.png"
          alt="Sui Mail"
          className="w-[250px] h-auto"
        />
      </div>
    </div>
  )
}
