import axios from "axios";
import { useQuery } from "react-query";

const fetchUsers = () => axios.get(
    "https://jsonplaceholder.typicode.com/users").
    then(respone => respone.data);

export default function useUsers() {
    return useQuery("users", fetchUsers)
}