import React from 'react'
import useMessages from '../query-hooks/useMessages';
import { ISetSelectedMessage } from '../Models/Interfaces';
import { IMessage } from '../Models/Interfaces';

export default function Messages({setSelectedMessage} : ISetSelectedMessage) {
    const messages = useMessages();


  return (
    <>
    {messages.isLoading && <p>Loading messagess...</p>}

    {messages.isError && <p>Couldn't fetch messagess</p>}

    {messages.isSuccess &&
    <ol>
        {messages.data.map((messages : IMessage)=>
        <li key={messages.id} onClick={() => setSelectedMessage(messages.id)} >{messages.phoneNumber}, {messages.sender}</li>
            )}    
    </ol>
    }
    </> 
  )
}
