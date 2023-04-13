import React from 'react'
import useMessage from '../query-hooks/useMessage';

export default function Message({selectedMessage}) {
    const message = useMessage(selectedMessage);

  return (
  <>
    {message.isLoading &&  <p>Loading user...</p>}

    {message.isSuccess && (
        <p>{`${message.data.text} - ${message.data.id}`}</p>
    )}
  </>
  ) 
}
