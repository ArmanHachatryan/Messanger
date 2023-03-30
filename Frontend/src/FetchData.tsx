import axios from 'axios'
import React, { useEffect, useState } from 'react'
import moment from "moment"

interface MessageData{
  id: string,
  text: string,
  phoneNumber: number,
  dateTime: string,
  status: number
  sender : string,

}

export default function FetchData() {
  const [data, setData] = useState<MessageData[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
        const response = await axios.get("https://localhost:44352/api/Home");

        setData(response.data);
    };

    fetchPosts();
  }, []);


  return (
    <>
      <h2>FetchingData GET-Query</h2>
      {data.map((post)=> {
        const {id, text, phoneNumber, dateTime, status, sender} = post;
        const date = moment(dateTime).format("DD.MM.YYYY");
        const time = moment(dateTime).format("HH:mm:ss");

        return (
          <article key={id}>
            <p>Дата отправки: {date}, Время: {time}</p>
            <p>Отправитель: {sender} </p>
            <p>Текст сообщения: {text}</p>
            <p>Отправлено на: {phoneNumber}</p>
            <p>Статус код {status}</p>
          </article>
        )
      })}
  </>
  )

}