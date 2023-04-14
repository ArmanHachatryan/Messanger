import React from 'react'
import useMessage from '../query-hooks/useMessage';

export default function Message({selectedMessage}) {
    const message = useMessage(selectedMessage);

  return (
  <>
    {message.isLoading &&  <p>Loading message...</p>}

    {message.isError && <p>Couldn't fetch message</p>}

    {message.isSuccess && (
        <p>{`${message.data.text} - ${message.data.phoneNumber} - ${message.data.dateTime}`}</p>
    )}
  </>
  ) 
}
