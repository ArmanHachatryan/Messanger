import React from 'react'
import useMessages from '../query-hooks/useMessages';

export default function Messages({setSelectedMessage}) {
    const messages = useMessages();


  return (
    <>
    {messages.isLoading && <p>Loading messagess...</p>}

    {messages.isError && <p>Couldn't fetch messagess</p>}

    {messages.isSuccess &&
    <ol>
        {messages.data.map(messages =>
        <li key={messages.id} onClick={() => setSelectedMessage(messages.id)} >{messages.phoneNumber}, {messages.sender}</li>
            )}    
    </ol>
    }
    </> 
  )
}
