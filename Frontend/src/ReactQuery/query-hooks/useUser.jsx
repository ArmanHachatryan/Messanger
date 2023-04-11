import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'

const fetchUser = (userId) => axios
    .get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    .then(response => response.data)



export default function useUser(userId) {
  return useQuery(["users", userId], () => fetchUser(userId))
}
