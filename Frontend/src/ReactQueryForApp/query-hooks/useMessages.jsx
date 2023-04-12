import axios from "axios";
import { useQuery } from "react-query";

const fetchMessages = () => axios.get(
    "https://localhost:44352/api/Home").
    then(respone => respone.data);

export default function useMessages() {
    return useQuery("messagess", fetchMessages)
}