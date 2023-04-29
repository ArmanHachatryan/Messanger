import React from 'react';
import axios from 'axios';
import { useMutation, useQueryClient } from 'react-query';
import { ISendMessage } from '../Models/Interfaces';


const createMessage = (message : ISendMessage) => axios.post("https://localhost:44352/api/Home", message)
    .then((response) => response.data)

export default function useCreateMessage() {
    const queryClient = useQueryClient()

    return useMutation((message : ISendMessage) => createMessage(message), {
        onSuccess: () => queryClient.invalidateQueries('messages'),
    });
}