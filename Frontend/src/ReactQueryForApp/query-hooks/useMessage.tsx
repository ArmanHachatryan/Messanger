import { useQuery } from 'react-query'
import axios from 'axios'
import { IMessage } from '../Models/Interfaces'

const fetchMessage = (messageId : string | null | undefined) => axios
    .get(`https://localhost:44352/api/Home/${messageId}`)
    .then(response => response.data)



export default function useMessage(messageId : string | null | undefined) {
  return useQuery<IMessage>(["message", messageId], () => fetchMessage(messageId))
}