import { useMutation } from "@tanstack/react-query"
import { post } from "../../api"

export const useCreateAccountMutation = () => {
  return useMutation({
    mutationFn: (value) => post("auth/create-account", value),
  })
}

export const useLoginMutation = () => {
  return useMutation({
    mutationFn: (value) => post("auth/login", value),
  })
}
