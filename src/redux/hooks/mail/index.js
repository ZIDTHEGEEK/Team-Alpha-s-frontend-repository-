import { useMutation } from "@tanstack/react-query"
// import { sendMail, deleteMail } from "../../../services/mail.service"
import { deleteMail, sendMail } from "../../../services/mail.service"

export const useSendMaillQuery = () => {
  return useMutation({
    mutationFn: () => sendMail(),
  })
}

export const useDeleteMaillQuery = () => {
  return useMutation({
    mutationFn: () => deleteMail(),
  })
}
