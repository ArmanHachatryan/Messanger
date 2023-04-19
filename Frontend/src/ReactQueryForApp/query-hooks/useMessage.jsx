import { useQuery } from 'react-query'
import axios from 'axios'

const fetchMessage = (messageId) => axios
    .get(`https://localhost:44352/api/Home/${messageId}`)
    .then(response => response.data)



export default function useMessage(messageId) {
  return useQuery(["message", messageId], () => fetchMessage(messageId))
}