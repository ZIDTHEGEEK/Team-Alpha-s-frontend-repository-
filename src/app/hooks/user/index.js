import { useQuery } from "@tanstack/react-query"
import { get } from "../../api"

export const useGetActiveUserDataQuery = () => {
  return useQuery({ queryKey: ["userdata"], queryFn: () => get("users/me") })
}
