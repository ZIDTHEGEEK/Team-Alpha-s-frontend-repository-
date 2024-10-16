import { deleteRequest, get, post, put } from "../../../api"
import { useMutation, useQuery } from "@tanstack/react-query"

export const useCreateDraftMutation = () => {
  return useMutation({
    mutationFn: (value) => post("drafts", value),
  })
}

export const useUpdateDraftMutation = () => {
  return useMutation({
    mutationFn: (id, value) => put(`drafts/${id}`, value),
  })
}

export const useGetDraftListQuery = () => {
  return useQuery({
    queryKey: ["drafts"],
    queryFn: () => get("drafts"),
  })
}

export const useGetDraftQuery = (id) => {
  return useQuery({
    queryKey: ["drafts/:id", id],
    queryFn: () => get(`drafts/${id}`),
  })
}

export const useDeleteDraftMutation = () => {
  return useMutation({
    mutationFn: (id) => deleteRequest(`drafts/${id}`),
  })
}
