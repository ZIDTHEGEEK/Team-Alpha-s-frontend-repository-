import { useMutation } from "@tanstack/react-query"
import { deleteMail, sendMail } from "../../../services/mail.service"

export const useSendMaillQuery = () => {
  return useMutation({
    mutationFn: (sendMailDto) => sendMail(sendMailDto),
  })
}

export const useDeleteMaillQuery = () => {
  return useMutation({
    mutationFn: (email) => deleteMail(email),
  })
}
