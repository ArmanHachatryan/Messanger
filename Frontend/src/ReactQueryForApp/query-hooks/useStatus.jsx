import axios from "axios";
import { useQuery } from "react-query";

const fetchStatus = () => axios.get(
    "https://localhost:44352/api/Home/status").
    then(respone => respone.data);

export default function useMessages() {
    return useQuery("status", fetchStatus)
}