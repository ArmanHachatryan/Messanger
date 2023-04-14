import React from 'react'
import useMessages from '../query-hooks/useMessages';

export default function Messagess({setSelectedMessage}) {
    const messagess = useMessages();


  return (
    <>
    {messagess.isLoading && <p>Loading messagess...</p>}

    {messagess.isError && <p>Couldn't fetch messagess</p>}

    {messagess.isSuccess &&
    <ol>
        {messagess.data.map(messages =>
        <li key={messages.id} onClick={() => setSelectedMessage(messages.id)} >{messages.phoneNumber}, {}</li>
            )}    
    </ol>
    }
    </> 
  )
}
