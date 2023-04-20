import React from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';

const createMessage = (message) => axios.post("https://localhost:44352/api/Home", message)
    .then((response) => response.data)

export default function useCreateMessage(message) {
    const queryClient = useQueryClient()

    return useMutation((message) => createMessage(message), {
        onSuccess: () => queryClient.invalidateQueries('messages'),
    });
}