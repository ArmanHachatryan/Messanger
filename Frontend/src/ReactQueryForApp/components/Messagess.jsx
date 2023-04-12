import React from 'react'
import useMessages from '../query-hooks/useMessages';

export default function Messagess() {
    const messagess = useMessages();

    console.log(messagess);

  return (
    <>
    {messagess.isLoading && <p>Loading users...</p>}

    {messagess.isError && <p>Couldn't fetch users</p>}

    {messagess.isSuccess &&
    <ul>
        {messagess.data.map(messages =>
        <li key={messages.id} >{messages.id},{messages.sender}</li>
            )}    
    </ul>
    }
    </> 
  )
}
