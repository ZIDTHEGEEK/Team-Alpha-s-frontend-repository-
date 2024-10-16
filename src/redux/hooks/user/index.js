import { useMutation, useQuery } from "@tanstack/react-query"
import { get, post, put } from "../../../api"

export const useGetActiveUserDataQuery = () => {
  return useQuery({ queryKey: ["userdata"], queryFn: () => get("users/me") })
}

export const useUpdateUserMutation = () => {
  return useMutation({ mutationFn: (values) => put("/users/me", values) })
}

export const useGetUserWalletByEmailMutation = () => {
  return useMutation({ mutationFn: (values) => post(`users/email`, values) })
}

export const useGetUserDetailsByEmailQuery = (email) => {
  return useQuery({
    queryKey: ["userByEmail", email],
    queryFn: () => get(`users/email/${email}`),
  })
}
