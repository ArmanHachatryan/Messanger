import React, { useState } from 'react'
import Messages from '../components/Messagess'
import Message from '../components/Message';

export default function MessageHistory() {
  const [selectedMessage, setSelectedMessage]= useState(null);

  return (
    <>
        <Messages setSelectedMessage={setSelectedMessage}/>

        <hr />

        <Message selectedMessage={selectedMessage}/>

    </>
  )
}
