import React from 'react'
import useMessage from '../query-hooks/useMessage';
import moment from "moment"

export default function Message({selectedMessage}) {
    const message = useMessage(selectedMessage);


  return (
  <>
    {message.isLoading &&  <p>Loading message...</p>}

    {message.isError && <p>Couldn't fetch message</p>}

    {message.isSuccess && (

<article key={message.data.id}>
  <p>Дата отправки: {moment(message.data.dateTime).format("DD.MM.YYYY")}, Время: {moment(message.data.dateTime).format("HH:mm:ss")}</p>
  <p>Отправитель: {message.data.sender} </p>
  <p>Текст сообщения: {message.data.text}</p>
  <p>Отправлено на: {message.data.phoneNumber}</p>
  <p>Статус код: {message.data.messageStatus}</p>
</article>
    )}
  </>
  ) 
}
